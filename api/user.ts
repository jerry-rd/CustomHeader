import { POST, GET, uploadFile } from '@/utils/request';

export const userLogin = (params: any) => POST('/user/login', params, {}, false);

export const loginSmsCode = (params: any) => POST('/user/login/smsCode', params, { appId: '10001', client: 'APPLET', channelId: 5 }, true);

// 获取短信码
export const captchaSmsCode = (params: any) => POST('/captcha/smsCode', params, {}, false);

export const userLogout = () => GET('/user/logout', {}, {}, true);

export const getUserInfo = () => GET('/user/info', {}, {}, false);

export const phoneRebind = (params: any) => POST('/user/phone/rebind', params, {}, false);

export const uploadAvatar = (fliePath: any) => uploadFile('/upload/avatar', 'avatar', fliePath, () => {});

export const updateUserInfo = (params: any) => POST('/user/info/save', params, {}, true);
