import { createStore } from 'vuex';
import { sellersModule } from './sellers';

export const store = createStore<{}>({
  modules: {
    sellers: sellersModule,
  },
});
