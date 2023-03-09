<script setup lang="ts">
import { copyToClipBoard } from '@vft/utils';
import { useTimeoutFn } from '@vueuse/core';
import Prism from 'prismjs';
import { onMounted, reactive } from 'vue';
import { $ref } from 'vue/macros';

interface CodeProps {
  code: string;
  type?: string;
  showLineNum?: boolean;
}

const { type = 'markup', showLineNum = true, code } = defineProps<CodeProps>();


onMounted(() => {
  Prism.highlightAll();
});

let copyStatus = $ref(false);

let copyIcon = reactive({
  icon: 'copy',
  color: '',
  size: 16
});

let successIcon = reactive({
  icon: 'success',
  color: '#1989fa',
  size: 18
});

function handleCopy() {
  if (!copyStatus) {
    copyStatus = true;
    copyToClipBoard(code, () => {
      useTimeoutFn(() => {
        copyStatus = false;
      }, 1500);
    });
  }
}
</script>

<template>
  <div>
    12
    <!--<pre :class="[{ 'line-numbers': showLineNum }, `language-${type}`]">-->
    <!--   <vft-icon @click="handleCopy" class="copy-icon" v-bind="copyStatus ? successIcon : copyIcon" cursor />-->
    <!--   <code :class="'language-'+ type"-->
    <!--     v-html="Prism.highlight(code, Prism.languages[type], type)" />-->
    <!--</pre>-->
  </div>
</template>

<!--<style lang="less">-->
<!--@import './index.less';-->
<!--</style>-->
