import { type Pinia } from 'pinia';
import { watch } from 'vue';
import { usePwaStoreWithOut } from './store';
import { usePwa } from './usePwa';

export function initPwa(pinia: Pinia, pwaKey: string) {
  const pwaStore = usePwaStoreWithOut(pinia);

  const { subscribe, event } = usePwa(pwaKey);

  subscribe(pwaKey, () => {
    pwaStore.setStatus(true);
  });

  watch(
    () => event.value,
    (val) => {
      pwaStore.setEvent(val);

      if (val) {
        pwaStore.setStatus(false);
      } else {
        pwaStore.setStatus(true);
      }
    },
    { immediate: true, deep: true }
  );
}
