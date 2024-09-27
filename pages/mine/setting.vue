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
	background-color: #f7f7f8;
	margin-bottom: 74rpx;
	.info-view {
		background-color: #ffffff;
		padding: 0px 30rpx;
		.info-title {
			font-size: 28rpx;
			color: #666;
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
				color: #333;
			}
			.value {
				color: #999;
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
		background-color: #ffffff;
		font-weight: 500;
		font-size: 32rpx;
		color: #333333;
		text-align: center;
	}
	.company-name {
		margin-top: 100rpx;
		font-weight: bold;
		font-size: 40rpx;
		color: #0077cc;
		line-height: 47rpx;
		text-align: center;
		margin-bottom: 60rpx;
	}
	.app-copy {
		text-align: center;
		font-weight: 500;
		font-size: 24rpx;
		color: #999999;
		margin-bottom: 20rpx;
	}
	.vesion {
		text-align: center;
		font-weight: 500;
		font-size: 24rpx;
		color: #999999;
		margin-bottom: 86rpx;
	}
	.other-info {
		color: #999999;
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
