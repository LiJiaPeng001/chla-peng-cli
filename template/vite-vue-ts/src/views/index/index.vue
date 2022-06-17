<template>
  <div m-2>
    <div>hello world</div>
    <div>{{ store.count }}</div>
    <button @click="action(true)">+</button>
    <button @click="action(false)">-</button>
    <router-link to="/test">go</router-link>
  </div>
</template>

<script setup lang="ts">
import setting from "@/store/setting";

let store = setting();

function action(status: boolean) {
  if (status) store.count++;
  else store.count--;
}
</script>
