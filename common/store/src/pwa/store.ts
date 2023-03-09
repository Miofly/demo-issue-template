import { defineStore, type Pinia } from 'pinia';
import type { BeforeInstallPromptEvent } from './types';

interface PwaState {
  event: BeforeInstallPromptEvent | null;
  status: boolean;
}

export const usePwaStore = defineStore({
  id: 'app-pwa',
  persist: true,
  state: (): PwaState => ({
    event: null,
    status: false
  }),
  getters: {
    getStatus(): boolean {
      return this.status;
    },
    getEvent(): PwaState['event'] {
      return this.event;
    }
  },
  actions: {
    setStatus(status) {
      this.status = status;
    },
    setEvent(event) {
      this.event = event;
    }
  }
});

export function usePwaStoreWithOut(pinia: Pinia) {
  return usePwaStore(pinia);
}
