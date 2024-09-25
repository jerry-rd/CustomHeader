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
			<button type="primary" class="login-button">登录/注册</button>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HeaderBar from '@/components/header-bar/Header.vue';

const backImageUrl = '../../static/header-close.png';
const phone = ref('');
const code = ref('')
const placeholderStyle = 'color:#999999;font-size:12px';
</script>

<style lang="scss" scoped>
.content {
	padding: 48rpx;
	.title {
		color: #333;
		font-size: 48rpx;
		font-weight: 600;
		line-height: 56px;
		margin-bottom: 24rpx;
	}
	.tip-text {
		font-weight: 400;
		font-size: 24rpx;
		color: #999999;
		line-height: 28rpx;
		text-align: left;
	}
	.form-view {
		margin-top: 80rpx;
		:deep(.uni-easyinput){
			margin-bottom: 48rpx;
		}
		:deep(.uni-easyinput__content) {
			height: 100rpx;
		}
		.code-view{
			margin-right: 28rpx;
			color: #0077CC;
			font-size: 24rpx;
		}
	}
	.login-button{
		margin-top: 120rpx;
	}
}
</style>
