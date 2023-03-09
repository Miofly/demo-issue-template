<script lang="ts" setup>
  import { createPopper } from 'vc/src/utils/popper';

  onMounted(() => {
    nextTick(() => {
      const button = document.querySelector('#button');
      const tooltip = document.querySelector('#tooltip');

      if (button && tooltip) {
        // @ts-ignore
        const popperInstance = createPopper(button, tooltip, {
          // placement: 'right',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 8]
              }
            }
          ]
        });

        function show () {
          // @ts-ignore
          tooltip?.setAttribute('data-show', '');

          popperInstance.setOptions((options) => ({
            ...options,
            modifiers: [
              // @ts-ignore
              ...options.modifiers,
              { name: 'eventListeners', enabled: true }
            ]
          }));

          popperInstance.update();
        }

        function hide () {
          tooltip.removeAttribute('data-show');

          popperInstance.setOptions((options) => ({
            ...options,
            modifiers: [
              ...options.modifiers,
              { name: 'eventListeners', enabled: false }
            ]
          }));
        }

        const showEvents = ['mouseenter', 'focus'];
        const hideEvents = ['mouseleave', 'blur'];

        showEvents.forEach((event) => {
          button.addEventListener(event, show);
        });

        hideEvents.forEach((event) => {
          button.addEventListener(event, hide);
        });
      }
    });
  });
</script>

<template>
  <button id="button" aria-describedby="tooltip">I'm a button</button>
  <div id="tooltip" role="tooltip">
    My tooltip
    <div id="arrow" data-popper-arrow />
  </div>
</template>

<style lang="less" scoped>
  #tooltip {
    background: #333;
    color: white;
    font-weight: bold;
    padding: 4px 8px;
    font-size: 13px;
    border-radius: 4px;
  }

  #arrow,
  #arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
  }

  #arrow {
    visibility: hidden;
  }

  #arrow::before {
    visibility: visible;
    content: '';
    transform: rotate(45deg);
  }

  #tooltip[data-popper-placement^='top'] > #arrow {
    bottom: -4px;
  }

  #tooltip[data-popper-placement^='bottom'] > #arrow {
    top: -4px;
  }

  #tooltip[data-popper-placement^='left'] > #arrow {
    right: -4px;
  }

  #tooltip[data-popper-placement^='right'] > #arrow {
    left: -4px;
  }

  #tooltip {
    /* ... */
    display: none;
  }

  #tooltip[data-show] {
    display: block;
  }
</style>
