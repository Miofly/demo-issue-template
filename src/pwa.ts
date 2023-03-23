import PubSub from 'pubsub-js';

export const APP_READY = 'app:install-ready';
export const APP_INSTALLED = 'app:installed';
export const APP_UPDATE = 'app:update';
export const PWA_REGISTERED_READY = 'pwa:reg-ready';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

class Pwa {
  event?: BeforeInstallPromptEvent | null;
  /** 是否准备好 */
  ready?: boolean;
  reg?: ServiceWorkerRegistration;

  constructor(private needsUpdate = false, private canReload = false) {
    this.addEvents();
  }

  addEvents() {
    window.addEventListener('beforeinstallprompt', (e: any) => {
      this.event = e;
      this.event!.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          this.emit(APP_INSTALLED);
          this.event = null;
        }
      });
      this.emit(APP_READY, e);
    });

    window.addEventListener('appinstalled', () => {
      this.emit(APP_INSTALLED);
    });

    window.addEventListener('beforeunload', this._skipWaitingSolo, false);
  }

  _skipWaitingSolo() {
    if (this.needsUpdate) {
      if (this.reg && this.reg.waiting) {
        this.reg.waiting.postMessage({ type: 'SKIP_WAITING_WHEN_SOLO' });
        this.needsUpdate = false;
      }
    }
  }

  /**
   * 刷新版本
   * @param refresh 是否刷新浏览器
   */
  refresh(refresh = true) {
    if (this.needsUpdate) {
      this.canReload = refresh;
      if (this.reg && this.reg.waiting) {
        this.reg.waiting.postMessage({ type: 'SKIP_WAITING' });
        this.needsUpdate = false;
      }
    }
  }

  register() {
    serviceWorkerRegistration.register({
      onUpdate: (reg) => {
        this.reg = reg;
        this.needsUpdate = true;
        this.emit(APP_UPDATE, reg);
      },
      onReady: (reg) => {
        this.reg = reg;
        this.ready = true;
        
        this.emit(PWA_REGISTERED_READY, reg);
      },
    });
    if ('serviceWorker' in navigator) {
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (refreshing) return;
        if (!this.canReload) {
          this.canReload = true;
          return;
        }
        setTimeout(() => {
          window.location.reload();
          refreshing = true;
        }, 100);
      });
    }
  }

  emit(name: string, ...values: any[]) {
    PubSub.publish(name, ...values);
  }

  subscribe(name: string, fn: (arg: any) => void) {
    PubSub.subscribe(name, (_: any, arg: any) => {
      fn(arg);
    });
  }

  unsubscribe(name: string) {
    PubSub.unsubscribe(name);
  }
}

export default new Pwa();
