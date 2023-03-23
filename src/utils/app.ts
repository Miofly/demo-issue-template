/* 本文件放置关于项目应用相关的一些帮助函数 */
import { isEmpty, isFunction } from 'lodash';


export const APP_TITLE = '企业预警通';

/**
 * 获取app标题
 * @return {string}
 */
export function getAppTitle (...titles: string[]): string {
	if (isEmpty(titles)) {
		return APP_TITLE;
	}
	if (titles.length === 1) {
		const title = titles[0];
		return title ? `${title} - ${APP_TITLE}` : APP_TITLE;
	}
	return `${titles.join(' - ')} - ${APP_TITLE}`;
}

// 创建桌面快捷方式
export function createDesktop (url: string, name: string) {
	try {
		const fso = new ActiveXObject('Scripting.FileSystemObject');
		const shell = new ActiveXObject('WScript.Shell');
		const folderPath = shell.SpecialFolders('Desktop'); //获取桌面本地桌面地址
		if (!fso.FolderExists(folderPath)) {
			fso.CreateFolder(folderPath);
		}
		if (!fso.FileExists(folderPath + '//' + name + '.lnk')) {
			//在指定的文件夹下创建名为sName的快捷方式
			const shortLink = shell.CreateShortcut(folderPath + '//' + name + '.lnk'); //相应的描述信息
			shortLink.Description = 'shortcut for ' + name; //快捷方式指向的链接
			shortLink.TargetPath = url; //激活链接并且窗口最大化
			shortLink.WindowStyle = 3;
			shortLink.Save();
		}
	} catch (e) {
		doSave(
			`[InternetShortcut]
URL=${url}`,
			'text/uri-list',
			`${name}.url`,
		);
	}
}

// 保存内容
function doSave (value: string, type: string, name: string) {
	let blob: Blob;
	if (isFunction(window.Blob)) {
		blob = new Blob([value], { type: type });
	} else {
		const BlobBuilder = window.BlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder || window.MSBlobBuilder;
		const bb = new BlobBuilder();
		bb.append(value);
		blob = bb.getBlob(type);
	}
	const URL = window.URL || window.webkitURL;
	const bloburl = URL.createObjectURL(blob);
	const anchor = document.createElement('a');
	if ('download' in anchor) {
		anchor.style.visibility = 'hidden';
		anchor.href = bloburl;
		anchor.download = name;
		document.body.appendChild(anchor);
		const evt = document.createEvent('MouseEvents');
		evt.initEvent('click', true, true);
		anchor.dispatchEvent(evt);
		document.body.removeChild(anchor);
	} else if (navigator.msSaveBlob) {
		navigator.msSaveBlob(blob, name);
	} else {
		window.location.href = bloburl;
	}
}
