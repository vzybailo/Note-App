import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: 'Notes list',
        titleApp: 'Notes App',
        search: '',
        message: null,
        priorityMsg: null,
        grid: true,
    },
    mutations: {
        setMes(state, payload) {
            state.message = payload
        },
        setGrid(state) {
            state.grid
        }
    },
    actions: {
        setMes({commit}) {
            let mes = 'Hi guy'
            commit ('setMes', mes)
        },
        setGrid({commit}) {
            commit ('setGrid')
        }
    },
    getters: {
        getMes (state) {
            return state.message
        },
        getGrid (state) {
            return state.grid
        }
    }
})