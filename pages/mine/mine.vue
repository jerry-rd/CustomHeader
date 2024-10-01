<template>
	<view>
		<HeaderBar :isShowBack="false">
			<view class="button-view">
				<view class="btn-icon" @click="goMineView"><image src="../../static/Setting.png" class="img-btn" mode="aspectFit" /></view>
				<view class="btn-icon" @click="scanAction"><image src="../../static/Scan.png" class="img-btn" mode="aspectFit" /></view>
			</view>
		</HeaderBar>
		<view class="content">
			<view class="avatar-view">
				<image class="avatar" src="https://img.alicdn.com/imgextra/i1/O1CN01EI93PS1xWbnJ87dXX_!!6000000006451-2-tps-150-150.png" mode="aspectFit"></image>
			</view>
			<view class="account-name">账号名称</view>
			<view class="vip-date">会员到期日：终身</view>
			<view class="card-view">
				<view class="title">最近学习</view>
				<view class="content-view">
					<view class="left-content">
						<view class="">从芯定义用电生活 曼顿科技闪耀2024慧聪品牌巡展</view>
						<view class="small-des">已经学习 89%</view>
					</view>
					<view class="right-pic">
						<image class="image-box" src="../../static/tabbar/index_Selected.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>

			<view class="in-view">
				<view class="left">学习历程</view>
				<view class="right">
					<uni-icons type="left" size="16"></uni-icons>
					<view class="time-text">2023-04</view>
					<uni-icons type="right" size="16"></uni-icons>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import { navigationTo } from '@/utils/tools';
import HeaderBar from '@/components/header-bar/Header.vue';

const goMineView = () => {
	navigationTo({ url: '/pages/mine/setting' }, 'navigateTo');
};

const scanAction = () => {
	uni.scanCode({
		success(res) {
			console.log(res);
		}
	});
};
</script>
<style lang="scss" scoped>
.button-view {
	display: flex;
	height: 100%;
	align-items: center;
	.btn-icon {
		height: 50rpx;
		width: 50rpx;
		& + .btn-icon {
			margin-left: 40rpx;
		}
	}
}
.img-btn {
	width: 50rpx;
	height: 50rpx;
}
.content {
	padding-top: 60rpx;
	padding: 0rpx 32rpx;
	.avatar-view {
		width: 180rpx;
		height: 180rpx;
		margin: 0 auto;
		border-radius: $uni-border-radius-circle;
		overflow: hidden;
		.avatar {
			width: 100%;
			height: 100%;
		}
	}
	.account-name {
		text-align: center;
		font-weight: 600;
		font-size: 40rpx;
		color: $uni-text-color;
		line-height: 47rpx;
	}
	.vip-date {
		margin-top: 10rpx;
		color: $uni-color-primary;
		font-weight: 400;
		font-size: 20rpx;
		text-align: center;
	}
	.card-view {
		margin-top: 80rpx;
		padding: 20rpx 32rpx;
		background: $uni-bg-color-grey;
		border-radius: 16rpx;
		.title {
			font-size: 24rpx;
			color: $uni-text-color-secondary;
		}
		.content-view {
			display: flex;
			.left-content {
				flex: 1;
				color: $uni-text-color;
				font-size: 28rpx;
				margin-top: 10rpx;
				.small-des {
					font-size: 20rpx;
					color: $uni-color-primary;
					margin-top: 10rpx;
				}
			}
			.right-pic {
				margin-left: 60rpx;
				width: 196rpx;
				height: 140rpx;
				background: rgba(0, 0, 0, 0.3);
				border-radius: 8rpx;
				.image-box {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.in-view {
		margin-top: 70rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 80rpx;
		.left {
			font-size: 24rpx;
			color: $uni-text-color-secondary;
		}
		.right {
			display: inline-flex;
			align-items: center;
			.time-text {
				display: inline-block;
				margin: 0rpx 80rpx;
				font-size: 40rpx;
				color: $uni-text-color;
			}
		}
	}
}
</style>
