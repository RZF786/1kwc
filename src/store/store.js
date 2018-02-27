import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    all: [],
    investorList:[]
  },
  getters: {
    getInvestorList: state => {
      return state.investorList
    }
  },
  mutations: {
    //showing passed with payload, represented as num
    addInvestorList: (state, investor) => {
      state.investorList.push(investor)
    }
  }, 
});