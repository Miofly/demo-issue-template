import { unref } from 'vue';
import { useTimeout } from '../use-timeout';

export type UseDelayedToggleProps = {
  open: (event?: Event) => void;
  close: (event?: Event) => void;
  showAfter: number;
  hideAfter: number;
};

export const useDelayedToggle = ({ showAfter = 0, hideAfter = 200, open, close }: UseDelayedToggleProps) => {
  const { registerTimeout } = useTimeout();

  const onOpen = (event?: Event) => {
    registerTimeout(() => {
      open(event);
    }, unref(showAfter));
  };

  const onClose = (event?: Event) => {
    registerTimeout(() => {
      close(event);
    }, unref(hideAfter));
  };

  return {
    onOpen,
    onClose
  };
};
