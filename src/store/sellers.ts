import { Module } from 'vuex';
import { Seller } from '../types';
import { generateSellers } from '../utils';

export interface SellersState {
  current: number | null;
  sellers: Seller[];
  isLoading: boolean;
}

const initialState: SellersState = {
  isLoading: false,
  sellers: [],
  current: null,
};

export const sellersModule: Module<SellersState, {}> = {
  namespaced: true,
  state: initialState,
  mutations: {
    setSellers(state, sellers: Seller[]) {
      state.sellers = sellers;
    },
    addSellers(state, sellers: Seller[]) {
      state.sellers.push(...sellers);
    },
    setLoading(state, loading: boolean) {
      state.isLoading = loading;
    },
    setCurrent(state, id: number) {
      state.current = id;
    },
  },
  actions: {
    fetchSellers({ commit }) {
      commit('setLoading', true);
      setTimeout(() => {
        const sellers = generateSellers(50);
        commit('setSellers', sellers);
        commit('setLoading', false);
      }, 1000);
    },
    loadMoreSellers({ commit }) {
      commit('setLoading', true);
      setTimeout(() => {
        const sellers = generateSellers(50);
        commit('addSellers', sellers);
        commit('setLoading', false);
      }, 1000);
    },
  },
};
