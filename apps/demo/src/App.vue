<script lang="ts" setup>
const router = useRouter();
const route = useRoute();

watch(()=> router.currentRoute.path, (val) => {
  // why not trgger
	console.log('router.currentRoute.path not trigger', val);
}, {
  immediate: true
});

watch(()=> route, (val, oldValue) => {
	console.log('route.path not trigger', val, oldValue);
  console.log('why is true', JSON.stringify(val) === JSON.stringify(oldValue));
}, {
  immediate: true,
  deep: true
});
</script>

<template>
  <div>
    {{router.currentRoute?.fullPath}}
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
