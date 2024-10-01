const api = () => {
	if (uni.getAccountInfoSync) {
		let curVersion = uni.getAccountInfoSync().miniProgram.envVersion;
		switch (curVersion) {
			case 'develop': // 开发版
				// return 'http://192.168.5.32:9081'
				// return 'https://bma-pre.snd02.com' // 预发布版本
				return 'https://bma.meiyuandgj.com'; // 测试地址
			case 'trial': // 体验版
				return 'https://testb-bma.sndtest.com'; // 预发布版本
			// return "https://testb-ctb.dunsys.net"
			case 'release': // 正式版
				return 'https://bma.meiyuandgj.com';
			default: // 其他,默认调用正式版
				return 'https://bma.meiyuandgj.com';
		}
	}
	return 'https://bma.meiyuandgj.com';
};

type methodType = 'GET' | 'POST' | 'PUT';

const request = (url: string, method: methodType, data: any, header = {}, loading:Boolean, all:Boolean) => {
	return new Promise((resolve, reject) => {
		loading && uni.showLoading({ title: 'loading' });
		const headerObj = { ...header };
		const token = uni.getStorageSync('Authorization');
		if (token) {
			headerObj['Authorization'] = token;
		}
		uni.request({
			url: api() + url, //接口地址：前缀+方法中传入的地址
			method, //请求方法
			data, //传递参数
			header: headerObj, //自定义头部，和后端商同后编写
			success: (res: any) => {
				if (res?.data?.code === '-1') {
					uni.reLaunch({ url: '/pages/index/index' });
				}
				if (res.data.code !== '0') {
					//自定请求失败的情况，这里以常见的token失效或过期为例
					console.log(api() + url + '请求失败', res);
					// 处理其他异常
					uni.showToast({ title: res.data?.message || '接口异常', icon: 'none', duration: 5000 });
					return;
				}
				console.log(api() + url + '请求成功', res);
				// all存在就返回全部，否则就返回data， 一般返回data
				resolve(all ? res.data : res.data.data); //成功
			},
			// 这里的接口请求，如果出现问题就输出接口请求失败的msg；
			//注：因为这里对于请求失败的设置统一抛错提示了，所以后续具体组件中使用接口请求的catch中不需要再写抛错提示
			fail: (err: any) => {
				uni.showToast({ title: err?.message || '请求接口异常', icon: 'error', duration: 5000 });
				reject(err);
			},
			complete: () => {
				loading && uni.hideLoading();
			}
		});
	});
};

const commonReq = (method: methodType, contentType: any) => (url: string, data: any, header: any, loading: Boolean, all: Boolean) =>
	request(url, method, data, { ...contentType, ...header }, loading, all);

export const GET = commonReq('GET', {});

export const POST = commonReq('POST', {
	'Content-Type': 'application/x-www-form-urlencoded'
});

export const POSTJ = commonReq('POST', {
	'Content-Type': 'application/json'
});

export const POSTF = commonReq('POST', {
	'Content-Type': 'multipart/form-data'
});

export const PUTJ = commonReq('PUT', {
	'Content-Type': 'application/json'
});
