<template>
	<view>
		<HeaderBar title="课程中心" :isShowBack="false" />
		<view class="content">
			<record-card v-for="item in records"></record-card>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { navigationTo } from '@/utils/tools';

import HeaderBar from '@/components/header-bar/Header.vue';

const records = ref([
	{},
	{},
	{}
]);

const toDetail = () => {
	navigationTo({ url: '/pages/detail/detail' }, 'reLaunch');
};
</script>

<style lang="scss" scoped>
.content {
	padding:30rpx;
	position: relative;
}
</style>
