<script setup lang="ts">
import { PROFILE_LIST } from '@/router/routes/user';
import { useUserStore } from '../../../store/modules/user';

let sideWidth = useCssVar('--vc-side-menu-width');
let sideCollapseWidth = useCssVar('--vc-side-menu-collapse-width');

let collapse = ref(false);

const userStore = useUserStore();

watch(
  () => collapse.value,
  (val) => {
    setStyle(val);
  },
  {
    immediate: true
  }
);

function setStyle (val) {
  nextTick(() => {
    const layoutContainer = document.getElementsByClassName('layout-container')?.[0] as HTMLElement;
    if (layoutContainer) {
      layoutContainer.style.marginLeft = val ? sideCollapseWidth.value : sideWidth.value;
    }
  });
}

onActivated(() => {
  setStyle(collapse.value);
});
</script>

<template>
  <vc-side-menu :width="210"  v-model:collapse="collapse"
    :menus="PROFILE_LIST" :menuTopBottomHeight="70">
    <template #top>
      <div class="h-70px flex">
        <vc-avatar :src="userStore.getUserInfo.photo" :size="40" />
        <div>
          <div class="nickname">{{ userStore.getUserInfo.nickname }}</div>
          <div class="compTitle" v-if="userStore.getUserInfo.company">{{ userStore.getUserInfo.company }}</div>
        </div>
      </div>
    </template>
  </vc-side-menu>
</template>

<style lang="scss" scoped>
.nickname {
  font-weight: 500;
  font-size: 14px;
  color: #333333;
  max-width: 120px;
  @include line-clamp(1);
}
.compTitle {
  font-weight: 400;
  font-size: 12px;
  color: #8B8C8C;
  max-width: 120px;
  @include line-clamp(1);
}
</style>
