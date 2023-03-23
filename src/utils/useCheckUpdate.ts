import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useDocumentVisibility } from '@vueuse/core';
import dayjs from 'dayjs';
import * as ls from 'local-storage';
import { isObject, isUndefined } from 'lodash';
import request from 'umi-request';

import { APP_UPDATE, PWA_REGISTERED_READY } from '@/configs/constants';
import { NEW_RELEASE_VERSION, NEW_VERSION_KEY } from '@/configs/localstorage';
import { UpdateLogs } from '@/models/types/pwa';
import pwa from '@/pwa';
import { Dispatch, IRootState } from '@/store';
import useRequest from '@/utils/ahooks/useRequest';

interface ReleaseData {
  version: string;
  dataVersion2: UpdateLogs;
}

const getETag = async () => {
  const protocolAndHost = `${window.location.protocol}//${window.location.host}`;
  const url = process.env.REACT_APP_TERMINAL_FLAG
    ? `${protocolAndHost}${process.env.PUBLIC_URL || '/'}`
    : protocolAndHost;
  const { response } = await request.head(url, {
    getResponse: true,
    cache: 'no-cache',
  });
  return response.headers.get('etag') || response.headers.get('last-modified');
};

export const getRelease = () =>
  request.get<ReleaseData>('/release.json', {
    cache: 'no-cache',
  });

export default function useCheckUpdate(delay = 30000) {
  const documentVisibility = useDocumentVisibility();
  const versionRef = useRef<string>();
  const regRef = useRef<ServiceWorkerRegistration>();
  const dispatch: Dispatch = useDispatch();
  const hasNewVersion = useSelector((store: IRootState) => store.pwa.hasNewVersion);
  const authed = useSelector((store: IRootState) => store.user.authed);
  const needUpdateRef = useRef(false);
  // 停留页面，检测到新版本发布，弹出升级提示窗口
  const { run: showModel } = useRequest(getRelease, {
    manual: true,
    onSuccess: (res) => {
      // console.log('zmm-log', '停留页面');
      const { version: releaseVersion, dataVersion2: updateLogs } = res || {};
      if (releaseVersion && updateLogs) {
        // 2022-06-29 当用户点击稍后，releaseVersion更新到本地，超出限制时候后，还会继续弹框
        dispatch.pwa.changeProps({
          isButtonRefresh: true,
          hasNewVersion: true,
          releaseVersion,
        });
        dispatch.pwa.updateNewReleaseInfo(updateLogs);
      } else {
        dispatch.pwa.changeProps({
          hasNewVersion: true,
          updateLogs,
          releaseVersion,
        });
        // 无新版本 显示活动弹窗
        // dispatch.pwa.changeProps({
        //   showActivityModal: true,
        // });
      }
    },
    onError: () => {
      dispatch.pwa.changeProps({
        hasNewVersion: true,
      });
    },
  });

  // 新开页面展示 更新介绍弹窗
  const { run: showDetailModel } = useRequest(getRelease, {
    manual: true,
    onSuccess: (res) => {
      // console.log('zmm-log', '新进页面');
      const { version: releaseVersion, dataVersion2: updateLogs } = res || {};
      if (releaseVersion && updateLogs) {
        // 新增逻辑：2022-06-29 修复类的弹窗不再提示，升级类的提示已升级，视作已经获取最新资源，
        // 如果在停留过程中出现弹框，点了稍后，然后刷新页面，当成新开的页面
        dispatch.pwa.changeProps({
          hasNewVersion: !updateLogs.isFix,
          releaseVersion,
          isButtonRefresh: false,
        });
        dispatch.pwa.updateReleaseInfo(updateLogs);
        dispatch.pwa.updateNewReleaseInfo(updateLogs);
        ls.set(NEW_RELEASE_VERSION, releaseVersion);
      } else {
        // 无新版本 显示活动弹窗
        // dispatch.pwa.changeProps({
        //   showActivityModal: true,
        // });
      }
    },
  });

  // 获取升级日志信息
  const { run: getReleaseLog } = useRequest(getRelease, {
    manual: true,
    onSuccess(res) {
      const { dataVersion2: updateLogs } = res || {};
      if (updateLogs) {
        dispatch.pwa.updateReleaseInfo(updateLogs);
      }
    },
  });

  const { run: pageUpdateCheck } = useRequest(getETag, {
    manual: true,
    onSuccess: (etag) => {
      if (etag) {
        const version = versionRef.current;
        if (isUndefined(version)) {
          // dispatch.pwa.changeProps({
          //   showActivityModal: true,
          // });
          versionRef.current = etag;
        } else if (version === etag) {
          if (needUpdateRef.current) {
            needUpdateRef.current = false;
            pwa.refresh(false);
          }
          // 无新版本 显示活动弹窗
          // 无新版本 显示会员到期提醒弹窗
          dispatch.pwa.changeProps({
            showActivityModal: true,
            showVipCountDownModal: true,
          });
        } else {
          if (version !== etag && needUpdateRef.current && authed) {
            showModel();
          }
        }
      }
    },
  });

  const canUpdate = useMemoizedFn<() => boolean>(() => {
    const versionCheckTime = ls.get<{ timestamp: string }>(NEW_VERSION_KEY);
    if (versionCheckTime && isObject(versionCheckTime)) {
      const { timestamp } = versionCheckTime;
      return !!(timestamp && dayjs().isAfter(dayjs(timestamp)));
    }
    return true;
  });

  const pagePollingTimer = useRef<number>();
  const pwaPollingTimer = useRef<number>();

  const startPollingPageUpdate = useMemoizedFn(() => {
    pagePollingTimer.current = window.setInterval(() => {
      canUpdate() && pageUpdateCheck();
    }, delay);
    if (hasNewVersion) {
      window.clearInterval(pagePollingTimer.current);
    }
  });
  const stopPollingPageUpdate = useMemoizedFn(() => {
    clearInterval(pagePollingTimer.current);
  });
  const startPollingPwaUpdate = useMemoizedFn(() => {
    const reg = regRef.current;
    if (reg) {
      pwaPollingTimer.current = window.setInterval(() => {
        canUpdate() && reg.update();
      }, delay);
      if (hasNewVersion) {
        window.clearInterval(pwaPollingTimer.current);
      }
    }
  });
  const stopPollingPwaUpdate = useMemoizedFn(() => {
    clearInterval(pwaPollingTimer.current);
  });

  useEffect(() => {
    if (documentVisibility === 'visible') {
      if (hasNewVersion) {
        stopPollingPageUpdate();
        stopPollingPwaUpdate();
      } else {
        startPollingPageUpdate();
        startPollingPwaUpdate();
      }
    } else {
      stopPollingPageUpdate();
      stopPollingPwaUpdate();
    }
  }, [
    hasNewVersion,
    documentVisibility,
    startPollingPageUpdate,
    startPollingPwaUpdate,
    stopPollingPageUpdate,
    stopPollingPwaUpdate,
  ]);
  useEffect(() => {
    return () => {
      stopPollingPageUpdate();
      stopPollingPwaUpdate();
    };
  }, [stopPollingPageUpdate, stopPollingPwaUpdate]);

  useEffect(() => {
    if (authed) {
      const hisReleaseVersion = ls.get<string>(NEW_RELEASE_VERSION);
      if (!hisReleaseVersion || hisReleaseVersion !== process.env.REACT_APP_RELEASE_VERSION) {
        showDetailModel();
      } else {
        getReleaseLog();
        // 无新版本 显示活动弹窗
        // 无新版本 显示会员到期提醒弹窗
        dispatch.pwa.changeProps({
          showActivityModal: true,
          showVipCountDownModal: true,
        });
      }
    }
  }, [showDetailModel, authed, dispatch.pwa, getReleaseLog]);

  useEffect(() => {
    pwa.subscribe(PWA_REGISTERED_READY, (reg: ServiceWorkerRegistration) => {
      regRef.current = reg;
    });

    return () => {
      pwa.unsubscribe(PWA_REGISTERED_READY);
    };
  }, []);

  useEffect(() => {
    pwa.subscribe(APP_UPDATE, (reg) => {
      regRef.current = reg;
      needUpdateRef.current = true;
    });

    return () => {
      pwa.unsubscribe(APP_UPDATE);
    };
  }, []);
}
