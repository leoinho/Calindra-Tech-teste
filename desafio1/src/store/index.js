import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sugestoes: [],
        produtos: [],
        pesquisa: '',
      },
      mutations: {
        SET_SUGESTOES(state, value) {
          state.sugestoes = value;
        },
        SET_PRODUTOS(state, value) {
          state.produtos = value;
        },
        SET_PESQUISA(state, value) {
          state.pesquisa = value;
        }
      }
});
