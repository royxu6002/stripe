import axios from "axios";
const state = {
    userInfo: null,
}
const getters = {
    userOrders(state) {
        return state.userInfo.orders.sort((a, b) => b.id - a.id);
    }
};
const mutations = {
    setUserData(state, user) {
        state.userInfo = JSON.parse(JSON.stringify(user));
    },
    addUserInvoiceAddressData(state, address) {
        state.userInfo.invoiceaddresses.push(JSON.parse(JSON.stringify(address)));
    },
    updateUserInvoiceAddressData(state, {index, address}) {
        state.userInfo.invoiceaddresses.splice(index, 1, JSON.parse(JSON.stringify(address)));
    },
    addUserConsigneeAddressData(state, address) {
        state.userInfo.consigneeaddresses.push(JSON.parse(JSON.stringify(address)));
    },
    updateUserConsigneeAddressData(state, {index, address}) {
        state.userInfo.consigneeaddresses.splice(index, 1, JSON.parse(JSON.stringify(address)));
    },
    deleteInvoiceAddressData(state, {id}) {
        let index = state.userInfo.invoiceaddresses.findIndex(add => add.id == id);
        state.userInfo.invoiceaddresses.splice(index, 1);
    },
    deleteConsigneeAddressData(state, {id}) {
        let index = state.userInfo.consigneeaddresses.findIndex(add => add.id == id);
        state.userInfo.consigneeaddresses.splice(index, 1);
    },
    addUserOrderData(state, order) {
        state.userInfo.orders.unshift(order);
    }
};
const actions = {
    getUserData({commit}, data) {
        commit('setUserData', data);
    },
    deleteUserInvoiceAddressData({commit}, payload) {
        commit('deleteInvoiceAddressData', payload);
    },
    deleteUserConsigneeAddressData({commit}, payload) {
        commit('deleteConsigneeAddressData', payload);
    }


};


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}