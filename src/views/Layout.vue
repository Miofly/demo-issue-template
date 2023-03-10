<template>
	<div>
		这是最外层的layout
		<br>
		<router-link to="/two/three">先点开第一个(console 1次)</router-link>
		<br>
		<router-link to="/two-other/three-other">再点开第二个(console 2次)</router-link>
		<br>
		<router-link to="/twos-other/threes-other">最后点开(console 3次)</router-link>
		<br>
		<router-link to="/twos">没有三级路由的二级路由页面</router-link>
		<br>
		经过测试，有几个三级路由页面被缓存，后面打开的三级路由页面中的setup就会执行几次，这bug也太坑了
		<router-view v-slot="{ route, Component }">
			<keep-alive>
				<component :is="Component" :key="route.query ? route.fullPath : route.path"/>
			</keep-alive>
		</router-view>
	</div>
</template>

<script lang="ts" setup>

</script>
