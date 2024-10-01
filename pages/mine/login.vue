<template>
	<view>
		<HeaderBar :isShowBack="true" isHideMenu :backImageUrl="backImageUrl" />
		<view class="content">
			<view class="title">手机号登录/注册</view>
			<view class="tip-text">未注册手机号验证后将自动登录</view>
			<view class="form-view">
				<uni-easyinput class="input-view" maxlength="11" type="number" v-model="phone" :placeholderStyle="placeholderStyle" placeholder="请输入手机号"></uni-easyinput>
				<uni-easyinput v-model="code" class="input-view">
					<template #right>
						<view class="code-view">获取验证码</view>
					</template>
				</uni-easyinput>
			</view>
			<button size="default" type="default" class="login-button" hover-class="is-hover">登录/注册</button>
			<view class="tips">
				<checkbox class="check-view" />
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
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HeaderBar from '@/components/header-bar/Header.vue';

const backImageUrl = '../../static/header-close.png';
const phone = ref('');
const code = ref('');
const placeholderStyle = 'color:#999999;font-size:12px';

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
</style>
