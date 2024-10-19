<template>
	<qf-image-cropper ref="qfImageCropper" :width="200" :height="200" :radius="0" @crop="handleCrop"></qf-image-cropper>
</template>

<script>
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
export default {
	mounted() {
		this.$refs.qfImageCropper.chooseImage({ sourceType: ['album'] });
	},
	methods: {
		handleCrop(e) {
			userStore.uploadAvatar(e.tempFilePath);
		}
	}
};
</script>

<style></style>
