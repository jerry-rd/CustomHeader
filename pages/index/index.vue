<template>
	<view>
		<HeaderBar title="课程中心" :isShowBack="false" />
		<view class="content">
			<record-card v-for="item in records">{{ item }}</record-card>
			
			<button @click="toDetail"> 跳转测试页面</button>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { navigationTo } from '@/utils/tools';

import HeaderBar from '@/components/header-bar/Header.vue';

const records = ref([{}, {}, {}]);

const toDetail = () => {
	navigationTo({ url: '/pages/mine/message' }, 'navigateTo');
};
</script>

<style lang="scss" scoped>
.content {
	padding: 30rpx;
	position: relative;
}
</style>
