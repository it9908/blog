// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule, // 注册 auth 模块
  },
  // 其他根级的 state、mutations、actions 等
});
