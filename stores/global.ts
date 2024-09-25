import { defineStore } from 'pinia';

export const useCounterStore = defineStore('global', {
	state: () => {
		return { count: 0 };
	},
	actions: {
		increment() {
			this.count++;
		}
	}
});
