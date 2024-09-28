<template>
	<view>
		<HeaderBar :isShowBack="true" isHideMenu :backImageUrl="backImageUrl" />
		<view class="content">
			<view class="title">绑定手机号</view>
			<view class="form-view">
				<uni-easyinput class="input-view" maxlength="11" type="number" v-model="phone" :placeholderStyle="placeholderStyle" placeholder="请输入新手机号"></uni-easyinput>
				<uni-easyinput v-model="code" class="input-view">
					<template #right>
						<view class="code-view">获取验证码</view>
					</template>
				</uni-easyinput>
			</view>
			<button size="default" type="default" class="login-button" hover-class="is-hover">验证身份</button>
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
</script>

<style lang="scss" scoped>
.content {
	padding: 48rpx;
	.title {
		color: #333;
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
			color: #0077cc;
			font-size: 24rpx;
		}
	}
	.login-button {
		height: 100rpx;
		line-height: 100rpx;
		margin-top: 120rpx;
		color: #ffffff;
		background-color: #0077cc;
		border-color: #0077cc;
		font-size: 14px;
		opacity: 0.9;
	}
	.is-hover {
		opacity: 1;
	}
}
</style>
