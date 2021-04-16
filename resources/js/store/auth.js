import axios from "axios";
const state = {
    userInfo: null,
}
const getters = {
    userOrders(state) {
        return state.userInfo.orders;
    }
};
const mutations = {
    setUserData(state, user) {
        state.userInfo = user;
    }
};
const actions = {
    getUserData({commit}, data) {
        commit('setUserData', data);
    }
};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}