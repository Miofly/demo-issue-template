<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useAppStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();

const { name, getNames } = appStore;
const { name: nameRef, getNames: getNamesRef } = storeToRefs(appStore);

console.log(nameRef, name, appStore.name);
console.log('====');

</script>

<template>
  <div>
		主页
    {{ nameRef }}
    {{ name }}
    {{ appStore.name }}
    {{ getNames }}
    {{ getNamesRef }}
    {{ appStore.getNames }}
	</div>
  <RouterView />
</template>
