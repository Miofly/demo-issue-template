import PubSub from 'pubsub-js';
import { nextTick, ref } from 'vue';
import type { BeforeInstallPromptEvent } from './types';

export function usePwa(key: string) {
  const event = ref<BeforeInstallPromptEvent | null>();

  initEvents(key);

  function initEvents(key: string) {
    window.addEventListener('beforeinstallprompt', (e) => {
      event.value = <BeforeInstallPromptEvent>e;
      event.value!.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          emit(key);
          event.value = null;
        }
      });
    });

    window.addEventListener('appinstalled', () => {
      emit(key);
    });
  }

  function emit(name: string, ...values: any[]) {
    PubSub.publish(name, ...values);
  }

  function subscribe(name: string, fn: (arg: any) => void) {
    PubSub.subscribe(name, (_: any, arg: any) => {
      fn(arg);
    });
  }

  function unsubscribe(name: string) {
    PubSub.unsubscribe(name);
  }

  nextTick(() => {
    initEvents(key);
  });

  return {
    event,
    subscribe,
    unsubscribe
  };
}
