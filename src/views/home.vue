<script lang="ts" setup>
import {ref} from 'vue';
import IconText from '../components/icon-text.vue';
const test = ref('test');
const handleTest = () => {
  console.log('触发点击事件');
};

const handleTest1 = () => {
  console.log('触发test事件');
};
</script>

<template>
  <div>
    <icon-text
      v-model="test"
      color="red"
      :list="[12, 33, 44]"
      name="继承的props"
      @click="handleTest"
      @test="handleTest1"
    />
  </div>
</template>
