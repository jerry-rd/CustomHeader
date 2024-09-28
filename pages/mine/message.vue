<template>
	<view class="content">
		<message-record v-for="item,index in list" :key="index"></message-record>
	</view>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const list = ref([{}, {}, {}])
</script>

<style scoped lang="scss">
.content {
	padding: 0rpx 30rpx;
}
</style>