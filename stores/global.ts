import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
	state: () => {
		return { count: 0 };
	},
	actions: {
		increment() {
			this.count++;
		}
	}
});
