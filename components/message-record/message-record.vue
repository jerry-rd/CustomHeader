<template>
	<view class="card-item">
		<view class="item-title">会员购买成功</view>
		<view class="item-content" :class="{ active: isOpen }">
			4月2日，由慧聪网主办的2024慧聪物联网全国品牌巡展 · 贵阳站拉开帷幕，曼顿科技作为智能空开领域的标杆性企业，受邀参与此次盛会，曼顿智能空开与,
			4月2日，由慧聪网主办的2024慧聪物联网全国品牌巡展 · 贵阳站拉开帷幕，曼顿科技作为智能空开领域的标杆性企业，受邀参与此次盛会，曼顿智能空开与
			4月2日，由慧聪网主办的2024慧聪物联网全国品牌巡展 · 贵阳站拉开帷幕，曼顿科技作为智能空开领域的标杆性企业，受邀参与此次盛会，曼顿智能空开与
		</view>
		<view class="item-collapse" @click="openContent">
			<uni-icons :type="isOpen ? 'up' : 'down'" size="12"></uni-icons>
			<text>{{ isOpen ? '收起' : '展开' }}</text>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref(false);
const openContent = () => {
	isOpen.value = !isOpen.value;
};
</script>

<style lang="scss" scoped>
.card-item {
	padding: 30rpx 0px;
	border-bottom: 1rpx solid #dddddd;
	position: relative;
	.item-title {
		font-size: 28rpx;
		color: #333;
		margin-bottom: 30rpx;
	}
	.item-content {
		font-size: 24rpx;
		color: #666;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 3;
		line-height: 30rpx;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		&.active {
			overflow: unset;
			-webkit-line-clamp: unset;
			display: unset;
			-webkit-box-orient: unset;
		}
	}

	.item-collapse {
		position: absolute;
		right: 6px;
		top: 35rpx;
		font-size: 24rpx;
		color: #666;
	}
}
</style>