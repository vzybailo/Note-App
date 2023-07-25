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
        note: {
            title: '',
            desc: '',
            selected: '',
            priorities: [
              {alias: 'low', name: 'low'},
              {alias: 'middle', name: 'middle'},
              {alias: 'high', name: 'high'},
          ],
          editable: false
        },
        notes: [
        {
            title: 'First note',
            desc: 'description for first note',
            date: new Date(Date.now()).toLocaleString(),
            editable: false
        },
        {
            title: 'Second note',
            desc: 'description for second note',
            date: new Date(Date.now()).toLocaleString(),
            editable: false
        },
        {
            title: 'Third note',
            desc: 'description for third note',
            date: new Date(Date.now()).toLocaleString(),
            editable: false
        }
        ]
    },
    mutations: {
        setMes(state, payload) {
            state.message = payload
        },
        setGrid(state, newValue) {
            state.grid = newValue
        }
    },
    actions: {
        setMes({commit}) {
            let mes = 'Hi guy'
            commit ('setMes', mes)
        },
        setGrid({commit}) {
            const newValue = false
            commit ('setGrid', newValue)
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