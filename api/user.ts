import { POST, GET } from '@/utils/request';

export const userLogin = (params: any) => POST('/user/login', params, {}, false);

export const loginSmsCode = (params: any) => POST('/user/login/smsCode', params, { appId: '10001', client: 'APPLET', channelId: 5 }, true);

// 获取短信码
export const captchaSmsCode = (params: any) => POST('/captcha/smsCode', params, {}, false);

export const userLogout = () => GET('/user/logout', {}, {}, false);

export const getUserInfo = () => GET('/user/info', {}, {}, false);

export const phoneRebind = (params: any) => POST('/user/phone/rebind', params, {}, false);
