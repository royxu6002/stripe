const state = {
    searchWord: '',
};

const getters =  {

};

const mutations = {
    setsearchWord(state, word) {
        state.searchWord = word;
    }
};

const actions = {

};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
