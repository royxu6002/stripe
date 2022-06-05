import axios from "axios";
const state = {
    // 包含用户的订单, 地址信息
    userInfo: '', 
}
const getters = {
    userOrders(state) {
        return state.userInfo.orders.sort((a, b) => b.id - a.id);
    },
    recentInvoiceAddressId(state) {
        let i =  state.userInfo.invoiceaddresses.length;
        let p = i - 1;
        return state.userInfo.invoiceaddresses[p].id;
    },
    recentConsigneeAddressId(state) {
        let i = state.userInfo.consigneeaddresses.length;
        let p = i - 1;
        return state.userInfo.consigneeaddresses[p].id; 
    },
};
const mutations = {
    setUserData(state, user) {
        state.userInfo = JSON.parse(JSON.stringify(user));
    },
    addUserInvoiceAddressData(state, address) {
        state.userInfo.invoiceaddresses.push(JSON.parse(JSON.stringify(address)));
    },
    addUserConsigneeAddressData(state, address) {
        state.userInfo.consigneeaddresses.push(JSON.parse(JSON.stringify(address)));
    },
    updateUserInvoiceAddressData(state, {index, address}) {
        state.userInfo.invoiceaddresses.splice(index, 1, JSON.parse(JSON.stringify(address)));
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