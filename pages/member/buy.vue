<template>
	<view>
		<HeaderBar :isShowBack="true" isHideMenu :backImageUrl="backImageUrl" />
		<view class="content">
			<view class="title">欢迎购买网站会员</view>
			<view class="tip-text">会员期间全站资料无限制查看</view>
			<view class="pick-view">
				<view class="pick-item">
					<view class="pick-content">
						<view class="label">终身</view>
						<view class="price">
							<text class="unit">￥</text>
							29.9
						</view>
						<view class="old-price">￥59.9</view>
						<view class="tag">优惠推荐</view>
					</view>
				</view>
				<view class="pick-item">
					<view class="pick-content">
						<view class="label">12个月</view>
						<view class="price">
							<text class="unit">￥</text>
							19.9
						</view>
						<view class="old-price">￥59.9</view>
					</view>
				</view>
				<view class="pick-item active">
					<view class="pick-content">
						<view class="label">1个月</view>
						<view class="price">
							<text class="unit">￥</text>
							9.9
						</view>
						<view class="old-price">￥19.9</view>
					</view>
				</view>
			</view>
			<button size="default" type="default" class="login-button" hover-class="is-hover">购买会员</button>
			<view class="tips">
				购买即视为您理解并同意
				<navigator class="href-text" url="/pages/member/protocol">会员协议</navigator>
				和
				<navigator class="href-text" url="/pages/other/privacy">续费协议</navigator>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/header-bar/Header.vue';
const backImageUrl = '../../static/header-close.png';
</script>

<style lang="scss" scoped>
.content {
	padding: 48rpx;
	.title {
		color: $uni-text-color;
		font-size: 40rpx;
		font-weight: 600;
		margin-bottom: 24rpx;
		text-align: center;
	}
	.tip-text {
		font-weight: 400;
		font-size: 28rpx;
		color: $uni-text-color-grey;
		text-align: left;
		text-align: center;
	}
	.pick-view {
		display: flex;
		height: 400rpx;
		margin-top: 120rpx;
		margin-left: -10rpx;
		margin-right: -10rpx;
		.pick-item {
			width: 33.33%;
			padding: 10rpx;
			.pick-content {
				background-color: $uni-bg-color-grey;
				border-radius: 16rpx;
				height: 240rpx;
				width: 100%;
				text-align: center;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;
				color: $uni-text-color;
				position: relative;
				.label {
					font-size: 24rpx;
					line-height: 34rpx;
				}
				.price {
					font-size: 48rpx;
					line-height: 72rpx;
					margin-top: 20rpx;
					.unit {
						font-size: 20rpx;
					}
				}
				.old-price {
					color: $uni-text-color-grey;
					font-size: 20rpx;
					line-height: 28rpx;
					margin-top: 20rpx;
					text-decoration: line-through;
				}
				.tag {
					position: absolute;
					top: -30rpx;
					left: 0rpx;
					font-size: 20rpx;
					color: $uni-text-color-inverse;
					padding: 6rpx 6rpx;
					border-radius: 8rpx;
					background: linear-gradient(90deg, #ff8412 0%, #ff3f15 100%);
				}
			}
			&.active {
				.pick-content {
					border: 2rpx solid $uni-color-primary;
					color: $uni-color-primary;
				}
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
		justify-content: center;
		.href-text {
			color: $uni-color-primary;
		}
	}
}
</style>
