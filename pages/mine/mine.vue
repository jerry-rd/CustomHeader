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
				<image class="avatar" :src="userStore?.userInfo?.avatar" mode="aspectFit"></image>
			</view>
			<view class="account-name">{{ userStore?.userInfo?.nickname }}</view>
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
					<uni-icons type="left" size="16" @click="prevMonth"></uni-icons>
					<view class="time-text">{{ dateValue }}</view>
					<uni-icons type="right" size="16" @click="nextMonth"></uni-icons>
				</view>
			</view>
			<view class="rows">
				<view class="col">
					<view class="value">14</view>
					<view class="label">月签到次数</view>
				</view>
				<view class="col">
					<view class="value">178.4 h</view>
					<view class="label">月学习时长</view>
				</view>
			</view>
			<uni-calendar ref="calendarRef" class="calendar" :showMonth="true" />
		</view>
	</view>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import { navigationTo } from '@/utils/tools';
import HeaderBar from '@/components/header-bar/Header.vue';
import { useUserStore } from '@/stores/user';

const calendarRef = ref(null);
const userStore = useUserStore();

const goMineView = () => {
	navigationTo({ url: '/pages/mine/setting' }, 'navigateTo');
};

const dateValue = computed<string>(() => {
	return calendarRef.value?.nowDate?.year + '-' + calendarRef.value?.nowDate?.month;
});

const prevMonth = () => {
	calendarRef.value?.pre();
};

const nextMonth = () => {
	calendarRef.value?.next();
};

const scanAction = () => {
	uni.scanCode({
		success(res) {
			console.log(res);
		}
	});
};

onLoad(() => {
	userStore.getUserInfo();
});
onMounted(() => {
	console.log(calendarRef.value);
});
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

.rows {
	display: flex;
	align-items: center;
	margin-left: -10rpx;
	margin-right: -10rpx;
	.col {
		background-color: $uni-bg-color-grey;
		flex: 1;
		margin: 10rpx;
		border-radius: 16rpx;
		padding: 32rpx;
		.value {
			font-size: 32rpx;
			font-weight: 600;
			color: $uni-text-color;
			line-height: 48rpx;
		}
		.label{
			font-size: 20rpx;
			color: $uni-text-color-grey;
			line-height: 28rpx;
		}
	}
}
.calendar :deep(.uni-calendar__header) {
	display: none;
}
</style>
