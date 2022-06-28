<template>
  <div class="container">
    <div class="text">x：{{ x }}</div>
    <div class="text">y：{{ y }}</div>
    <div class="text">{{ sRGBHex }}</div>
    <button class="btn" @click="open()">open rgb</button>
  </div>
</template>

<script lang="ts" setup>
let { x, y } = useMouse()

const { sRGBHex, open } = useEyeDropper()

console.log(sRGBHex.value)
</script>

<style lang="less" scoped>
.container {
  text-align: center;
  .text {
    margin: 50px 0;
    font-size: 30px;
    font-weight: bold;
  }
  .mouse-part {
    width: 500px;
    height: 500px;
    margin: 0 auto;
    background-color: pink;
  }
}
</style>
