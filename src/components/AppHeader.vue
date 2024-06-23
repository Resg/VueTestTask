<template>
  <div class="header">
    <div>
      <div class="text">Sellers Online</div>
      <div></div>
    </div>
    <div>
      <CrownSvg class="avatar" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CrownSvg from '@assets/crown.svg';
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: #24292f;
  height: 72px;
}
.text {
  color: white;
  font-size: 32px;
  font-family: 'Roboto';
}
.avatar {
  height: 32px;
  width: 32px;
  border-radius: 100px;
  background: white;
}
</style>
