<template>
  <div class="w-full h-screen" style="margin-top: 20px;">
    <div class="flex justify-center items-center">
      <h1>主页部分</h1>
    </div>
    <div class="flex justify-center items-center">
      <button @click="set">Set Token</button>
      <button @click="get">Get Token</button>
      <button @click="remove">Remove Token</button>
    </div>
    <div class="flex justify-center items-center">
      <nuxt-link to="/">主页</nuxt-link>
      <nuxt-link to="/login">去登录</nuxt-link>
      <nuxt-link to="/my">我的信息</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {getToken, removeToken, setToken} from "~/utils/token";

function set() {
  console.log('setToken');
  setToken('This_is_My_Token');
}
function get() {
  const token: string | null = getToken();
  console.log('getToken ', token);
}
function remove() {
  console.log('removeToken');
  removeToken();
}
</script>

<style scoped>
button {
  border: 1px solid black;
  width: 100px;
  height: 50px;
}
</style>
