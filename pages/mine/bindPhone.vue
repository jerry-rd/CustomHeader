<template>
	<view>
		<HeaderBar :isShowBack="true" isHideMenu :backImageUrl="backImageUrl" />
		<view class="content">
			<view class="title">绑定手机号</view>
			<view class="form-view">
				<uni-easyinput class="input-view" maxlength="11" type="number" v-model="phone" :placeholderStyle="placeholderStyle" placeholder="请输入新手机号"></uni-easyinput>
				<uni-easyinput v-model="smsCode" maxlength="6" class="input-view">
					<template #right>
						<view class="code-view">
							<view v-if="userStore.countDown === 0" @click="getSmsCode">获取验证码</view>
							<view class="countdown" v-else>{{ userStore.countDown }}秒后获取</view>
						</view>
					</template>
				</uni-easyinput>
			</view>
			<button size="default" type="default" class="login-button" :disabled="userStore.isLogin" @click="reBindPhone" hover-class="is-hover">验证身份</button>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HeaderBar from '@/components/header-bar/Header.vue';
import { useUserStore } from '@/stores/user';

const phoneRegex = /^1[3-9]\d{9}$/;

const userStore = useUserStore();

const getSmsCode = () => {
	if (!phoneRegex.test(phone.value)) {
		return uni.showToast({ title: '号码格式错误', icon: 'none', duration: 2000 });
	}
	userStore.sendSmsCode({ phone: phone.value });
};

const reBindPhone = ()=>{
	if (!phoneRegex.test(phone.value)) {
		return uni.showToast({ title: '号码格式错误', icon: 'none', duration: 2000 });
	}
	if (!smsCode.value) {
		return uni.showToast({ title: '请输入验证码', icon: 'none', duration: 2000 });
	}
	userStore.reBindPhone({ phone: phone.value, smsCode: smsCode.value });
}

const backImageUrl = '../../static/header-close.png';
const phone = ref('');
const smsCode = ref('');
const placeholderStyle = 'color:#999999;font-size:12px';
</script>

<style lang="scss" scoped>
.content {
	padding: 48rpx;
	.title {
		color: $uni-text-color;
		font-size: 48rpx;
		font-weight: 600;
		line-height: 56px;
	}
	.form-view {
		margin-top: 138rpx;
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
}
</style>
