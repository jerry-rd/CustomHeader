<template>
	<view class="content">
		<view class="info-view">
			<view class="info-title">账号信息</view>
			<view class="info-item">
				<view class="label">用户头像</view>
				<view class="value">
					<view class="value-content">
						<image style="width: 36px; height: 36px" mode="aspectFit" src=""></image>
					</view>
					<uni-icons type="forward" size="16" color="#999"></uni-icons>
				</view>
			</view>
			<view class="info-item">
				<view class="label">账号名称</view>
				<view class="value">
					<text class="value-content">1233122</text>
					<uni-icons type="forward" size="16" color="#999"></uni-icons>
				</view>
			</view>
			<view class="info-title">绑定信息</view>
			<view class="info-item">
				<view class="label">绑定手机号</view>
				<view class="value">
					<text class="value-content">15919923125</text>
					<uni-icons type="forward" size="16" color="#999"></uni-icons>
				</view>
			</view>
			<view class="info-item">
				<view class="label">绑定微信</view>
				<view class="value">
					<text class="value-content">dasheng</text>
					<uni-icons type="forward" size="16" color="#999"></uni-icons>
				</view>
			</view>
		</view>
		<view class="btn-view">退出登录</view>
		<view class="btn-view">注销账号</view>
		<view class="company-name">曼顿科技</view>
		<view class="app-copy">APP名称 ©️ 2012-2024</view>
		<view class="vesion">V1.3.45</view>
		<view class="other-info">
			<navigator class="href-text" url="/pages/other/protocol">用户协议</navigator>
			<!-- #ifdef MP-WEIXIN -->
			<navigator class="href-text" @click="getPrivacyContract" url="">隐私政策</navigator>
			<!-- #endif -->
			<!-- #ifndef MP-WEIXIN -->
			<navigator class="href-text" url="/pages/other/privacy">隐私政策</navigator>
			<!-- #endif -->
		</view>
	</view>
</template>

<script lang="ts" setup>
// #ifdef MP-WEIXIN
const getPrivacyContract = () => {
	wx.openPrivacyContract({
		success: () => {}, // 打开成功
		fail: () => {}, // 打开失败
		complete: () => {}
	});
};
//#endif
</script>

<style lang="scss" scoped>
.content {
	height: 100vh;
	width: 100vw;
	background-color: $uni-bg-color-grey;
	margin-bottom: 74rpx;
	.info-view {
		background-color: $uni-bg-color;
		padding: 0px 30rpx;
		.info-title {
			font-size: 28rpx;
			color: $uni-text-color-secondary;
			margin-bottom: 10rpx;
			margin-top: 30rpx;
		}
		.info-item {
			height: 108rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.label {
				font-size: 32rpx;
				color: $uni-text-color;
			}
			.value {
				color: $uni-text-color-grey;
				flex: 1;
				font-size: 28rpx;
				display: inline-flex;
				align-items: center;
				justify-content: flex-end;
				.value-content {
					margin-right: 20rpx;
				}
			}
		}
	}
	.btn-view {
		margin-top: 40rpx;
		height: 108rpx;
		width: 100%;
		line-height: 108rpx;
		background-color: $uni-text-color-inverse;
		font-weight: 500;
		font-size: 32rpx;
		color: $uni-text-color;
		text-align: center;
	}
	.company-name {
		margin-top: 100rpx;
		font-weight: bold;
		font-size: 40rpx;
		color: $uni-color-primary;
		line-height: 47rpx;
		text-align: center;
		margin-bottom: 60rpx;
	}
	.app-copy {
		text-align: center;
		font-weight: 500;
		font-size: 24rpx;
		color: $uni-text-color-grey;
		margin-bottom: 20rpx;
	}
	.vesion {
		text-align: center;
		font-weight: 500;
		font-size: 24rpx;
		color: $uni-text-color-grey;
		margin-bottom: 86rpx;
	}
	.other-info {
		color: $uni-text-color-grey;
		font-size: 24rpx;
		display: flex;
		justify-content: space-between;
		margin-left: 240rpx;
		margin-right: 240rpx;
		.href-text {
			text-decoration: underline;
		}
	}
}
</style>
