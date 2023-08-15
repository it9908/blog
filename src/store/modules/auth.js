// store/modules/auth.js
const state = {
    isLoggedIn: false,
};

const mutations = {
    setLoggedIn(state, value) {
        state.isLoggedIn = value;
    },
};

const actions = {
    loginSuccess({ commit }) {
        commit('setLoggedIn', true);
    },
    logout({ commit }) {
        commit('setLoggedIn', false);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
