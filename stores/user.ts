import { defineStore } from 'pinia';
import { getUserInfo, loginSmsCode, captchaSmsCode, phoneRebind } from '@/api/user';

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			countDown: 0,
			isLogin: false,
			userInfo: null
		};
	},
	actions: {
		async getUserInfo() {
			const res: any = await getUserInfo();
			if (res?.code === 0) {
				this.userInfo = res.data;
			}
		},
		setIntervalCount() {
			this.countDown = 60;
			const timer = setInterval(() => {
				if (this.countDown > 0) {
					this.countDown--;
				} else {
					clearInterval(timer);
				}
			}, 1000);
		},
		async sendSmsCode(params: any) {
			const res: any = await captchaSmsCode(params);
			if (res.code === 0) {
				this.setIntervalCount();
				uni.showToast({ title: res?.message, icon: 'none', duration: 3000 });
			}
		},
		async loginBySmsCode(params: any) {
			this.isLogin = true;
			const res: any = await loginSmsCode(params);
			this.isLogin = false;
			if (res.code === 0) {
				uni.reLaunch({ url: '/pages/mine/mine' });
			}
		},
		async reBindPhone(params: any) {
			this.isLogin = true;
			const res: any = await phoneRebind(params);
			this.isLogin = false;
			if (res.code === 0) {
				await this.getUserInfo();
				uni.navigateBack({ delta: 1 });
			}
		}
	}
});
