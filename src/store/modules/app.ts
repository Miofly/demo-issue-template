import { defineStore } from 'pinia';
import pinia from '@/store';

interface AppState {
  name: string;
  value: string;
  status: boolean;
  cache: Record<string, any>;
  attr: Record<string, any>;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    name: 'test',
    value: '',
    status: false,
    cache: {},
    attr: {},
  }),
  actions: {
    updateStates(states: Partial<AppState>) {
      this.$patch(states);
    },
    getAllState() {
      return this.$state;
    },
  },
});

export function useAppStoreWithOut() {
  return useAppStore(pinia);
}
