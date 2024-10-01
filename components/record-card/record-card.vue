<template>
	<view class="card">
		<view class="header-flex">
			<view class="user-text">主讲人：张雪峰</view>
			<view class="num-text">已有 66 人学习过</view>
		</view>
		<view class="content-flex">
			<view class="title-text">从芯定义用电生活 曼顿科技闪耀 2024慧聪品牌巡展</view>
			<view class="image-box">
				<image class="img-bg" src="../../static/tabbar/calendar_Select.png" mode="aspectFill"></image>
			</view>
		</view>
		<view class="process-text">已经学习 89%</view>
	</view>
</template>

<script></script>

<style lang="scss" scoped>
.card {
	border-bottom: 1px solid $uni-border-color;
	padding-top: 30rpx;
	padding-bottom: 30rpx;
	position: relative;
	.header-flex {
		display: flex;
		justify-content: space-between;
		font-size: 24rpx;
		.user-text {
			color: $uni-text-color-secondary;
		}
		.num-text {
			color: $uni-text-color-grey;
		}
	}
	.content-flex {
		padding-top: 20rpx;
		display: flex;
		justify-content: space-between;
		.title-text {
			flex: 1;
			font-size: 28rpx;
			color: $uni-text-color;
			font-weight: 600;
			line-height: 48rpx;
			padding-bottom: 30rpx;
		}
		.image-box {
			width: 200rpx;
			height: 140rpx;
			border-radius: 8rpx;
			margin-left: 40rpx;
			.img-bg {
				width: 100%;
				height: 100%;
			}
		}
	}
	.process-text {
		color: $uni-color-primary;
		font-size: 20rpx;
		position: absolute;
		bottom: 30rpx;
	}
}
</style>
