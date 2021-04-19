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
    },
    addUserInvoiceAddressData(state, address) {
        state.userInfo.invoiceaddresses.push(address);
    },
    updateUserInvoiceAddressData(state, {index, address}) {
        state.userInfo.invoiceaddresses.splice(index, 1, address);
    },
    deleteUserInvoiceAddressData(state, {index}) {
        state.userInfo.invoiceaddresses.splice(index, 1);
    },
    addUserOrderData(state, order) {
        state.userInfo.orders.push(order);
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