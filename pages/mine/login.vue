<template>
	<view>
		<HeaderBar :isShowBack="true" isHideMenu :backImageUrl="backImageUrl" />
		<view class="content">
			<view class="title">手机号登录/注册</view>
			<view class="tip-text">未注册手机号验证后将自动登录</view>
			<view class="form-view">
				<uni-easyinput class="input-view" maxlength="11" type="number" v-model="phone" :placeholderStyle="placeholderStyle" placeholder="请输入手机号"></uni-easyinput>
				<uni-easyinput v-model="smsCode" maxlength="6" class="input-view">
					<template #right>
						<view class="code-view">
							<view v-if="userStore.countDown === 0" @click="getSmsCode">获取验证码</view>
							<view class="countdown" v-else>{{ userStore.countDown }}秒后获取</view>
						</view>
					</template>
				</uni-easyinput>
			</view>
			<button size="default" type="default" class="login-button" :disabled="userStore.isLogin || !checked" @click="loginBind" hover-class="is-hover">登录/注册</button>
			<view class="tips">
				<checkbox-group @change="checkedChange">
					<checkbox class="check-view" value="1" color="#0077cc" />
				</checkbox-group>
				登录/注册即认为您理解并同意
				<navigator class="href-text" url="/pages/other/protocol">用户协议</navigator>
				和
				<!-- #ifdef MP-WEIXIN -->
				<navigator class="href-text" @click="getPrivacyContract" url="">隐私政策</navigator>
				<!-- #endif -->
				<!-- #ifndef MP-WEIXIN -->
				<navigator class="href-text" url="/pages/other/privacy">隐私政策</navigator>
				<!-- #endif -->
			</view>
		</view>
		<view class="other-login">
			<view>其他登录方式</view>
			<view class="btn-icon">
				 <uni-icons type="weixin" size="46" color="#09BB07"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HeaderBar from '@/components/header-bar/Header.vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

const backImageUrl = '../../static/header-close.png';
const phone = ref('');
const smsCode = ref('');
const checked = ref(false);
const placeholderStyle = 'color:#999999;font-size:12px';
const phoneRegex = /^1[3-9]\d{9}$/;

const checkedChange = (e: any) => {
	checked.value = e?.detail?.value.includes('1');
};

const getSmsCode = () => {
	if (!phoneRegex.test(phone.value)) {
		return uni.showToast({ title: '号码格式错误', icon: 'none', duration: 2000 });
	}
	userStore.sendSmsCode({ phone: phone.value });
};

const loginBind = () => {
	if (!phoneRegex.test(phone.value)) {
		return uni.showToast({ title: '号码格式错误', icon: 'none', duration: 2000 });
	}
	if (!smsCode.value) {
		return uni.showToast({ title: '请输入验证码', icon: 'none', duration: 2000 });
	}
	if (!checked.value) {
		return uni.showToast({ title: '请先阅读并同意协议', icon: 'none', duration: 2000 });
	}
	userStore.loginBySmsCode({ phone: phone.value, smsCode: smsCode.value });
};

// #ifdef MP-WEIXIN
const getPrivacyContract = () => {
	wx.openPrivacyContract({
		success: () => {}, // 打开成功
		fail: () => {}, // 打开失败
		complete: () => {}
	});
};
// #endif
</script>

<style lang="scss" scoped>
.content {
	padding: 48rpx;
	.title {
		color: $uni-text-color;
		font-size: 48rpx;
		font-weight: 600;
		line-height: 56px;
		margin-bottom: 24rpx;
	}
	.tip-text {
		font-weight: 400;
		font-size: 24rpx;
		color: $uni-text-color-grey;
		line-height: 28rpx;
		text-align: left;
	}
	.form-view {
		margin-top: 80rpx;
		:deep(.uni-easyinput) {
			margin-bottom: 48rpx;
		}
		:deep(.uni-easyinput__content) {
			height: 100rpx;
		}
		.code-view {
			margin-right: 28rpx;
			color: $uni-color-primary;
			font-size: 24rpx;
			.countdown {
				color: $uni-text-color-grey;
			}
		}
	}
	.login-button {
		height: 100rpx;
		line-height: 100rpx;
		margin-top: 120rpx;
		color: $uni-text-color-inverse;
		background-color: $uni-color-primary;
		border-color: $uni-color-primary;
		font-size: 14px;
		opacity: 0.9;
		&[disabled] {
			opacity: 0.7;
		}
	}
	.is-hover {
		opacity: 1;
	}
	.tips {
		margin-top: 20px;
		font-size: 24rpx;
		color: $uni-text-color-grey;
		display: flex;
		align-items: center;
		.check-view {
			transform: scale(0.7);
		}
		.href-text {
			color: $uni-color-primary;
		}
	}
}
.other-login {
	margin-top: 300rpx;
	text-align: center;
	font-size: 24rpx;
	color: $uni-text-color-grey;
	.btn-icon{
		margin-top: 30rpx;
	}
}
</style>
