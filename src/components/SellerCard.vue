<script setup lang="ts">
import CrownSvg from '@assets/crown.svg';
import { Color, Seller } from '@/types';
import { useStore } from 'vuex';
import { computed } from 'vue';

export interface SellerCardProps extends Seller {
  id: number;
  class?: string;
}

const props = defineProps<SellerCardProps>();
const store = useStore();
const isCurrent = computed(() => store.state.sellers.current === props.id);
const bg = computed(() => {
  switch (props.color) {
    case Color.BLUE:
      return '#ffe900';
    case Color.GREEN:
      return '#00cdff7a';
    case Color.RED:
    default:
      return '#00ffb2';
  }
});
const handleClick = () => {
  if (isCurrent.value) {
    store.commit('sellers/setCurrent', null);
  } else {
    store.commit('sellers/setCurrent', props.id);
  }
};
</script>

<template>
  <div class="card" :class="isCurrent && 'shine'" @click="handleClick">
    <div class="part">
      <CrownSvg :style="{ background: bg }" class="avatar" :fill="color" />
    </div>
    <div class="part">
      <div class="name">{{ name }}</div>
      <div class="additional">
        <div class="textContainer">
          <div class="header">Rating:</div>
          <div class="text">{{ rating }}</div>
        </div>
        <div class="divider" />
        <div class="textContainer">
          <div class="header">Sales:</div>
          <div class="text">{{ sales }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  background: white;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  height: 300px;
  overflow: hidden;
}
.part {
  height: calc(60% - 0.5px);
  display: flex;
  flex-direction: column;
  &:first-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    align-items: center;
    justify-content: center;
  }
  &:last-child {
    height: calc(40% - 0.5px);
    padding: 12px;
    align-items: flex-start;
    justify-content: space-between;
  }
}
.avatar {
  width: 100%;
  height: 100%;
}

.name {
  font-size: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.additional {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.textContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
}

.text {
  font-size: 18px;
  color: black;
}

.divider {
  height: 1px;
  width: 60%;
  align-self: center;
  background: rgba(0, 0, 0, 0.1);
  transform: translateX(15px);
}
.shine {
  box-shadow: 0 0 10px 0 #b700ffff;
}
</style>
