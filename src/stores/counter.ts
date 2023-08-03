import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    name: '我是初始值'
  }),
  getters: {
    getNames () {
    	return this.name + '0000'
    }
  },
  actions: {
    getState () {
    	return this.name
    }
  }
});
