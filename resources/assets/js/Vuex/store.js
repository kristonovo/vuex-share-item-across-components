import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// We create an object to hold the initial state when
// the app starts up
const state = {
    invitations: 0
};

// Create an object storing various mutations. We will write the mutation
const mutations = {
    INCREMENT (state, amount) {
        state.invitations = state.invitations + amount
    },
    SET_INVITATIONS (state, value) {
        state.invitations = value
    }
};

// We combine the intial state and the mutations to create a vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
    state,
    mutations
})