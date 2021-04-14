import axios from "axios";
const state = {
    userInfo: []
}
const getters = {
    userOrders(state) {
        return state.userInfo[0];
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