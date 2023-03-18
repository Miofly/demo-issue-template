<script lang="ts" setup>
import { useNamespace } from './utils';

const ns = /* hoist-static*/ useNamespace('divider');

defineOptions({
	name: ns.b()
});
</script>

<template>
	<div :class="[ns.b()]">
		test
	</div>
</template>
