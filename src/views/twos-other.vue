<template>
  <div>
		这是第三个三级路由的公共layout twos-other.vue
    <router-view v-slot="{ route, Component }">
      <keep-alive>
        <component :is="Component" :key="route.query ? route.fullPath : route.path"/>
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts" setup>

</script>
