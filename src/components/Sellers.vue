<script setup lang="ts">
import SellerCard from '@components/SellerCard.vue';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { Seller } from '@/types';

const store = useStore();

const sellers = computed<Seller[]>(() => store.state.sellers.sellers);
const isLoading = computed(() => store.state.sellers.isLoading);
const container = ref<HTMLDivElement | null>(null);

const loadMore = (e: MouseEvent) => {
  const el = container.value;
  if (!el) {
    return;
  }
  const isBottom = el.clientHeight + el.scrollTop >= el.scrollHeight - 600;
  if (isBottom && !isLoading.value) {
    store.dispatch('sellers/loadMoreSellers');
  }
};

onMounted(() => {
  store.dispatch('sellers/fetchSellers');
  container.value?.addEventListener('scroll', loadMore);
  console.log(container.value);
});
</script>

<template>
  <div class="container" ref="container">
    <div style="margin-bottom: 32px; width: 100%">
      <div class="list">
        <div class="listItem" v-for="(seller, index) in sellers" :key="index">
          <SellerCard
            :name="seller.name"
            :sales="seller.sales"
            :rating="seller.rating"
            :color="seller.color"
            :id="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  gap: 64px;
  background: #f7f6f5;
  height: calc(100vh - 72px);
  padding: 36px 24px 0;
  overflow: auto;
}

.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  gap: 32px;
  width: 100%;
}

.listItem {
  min-width: 240px;
}
</style>
