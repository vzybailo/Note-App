import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        title: 'Notes list',
        titleApp: 'Notes App',
        search: '',
        message: '',
        grid: undefined,
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
        setMes(state) {
            state.message = 'Title can`t be blank!'
        },
        setPriorMes(state) {
            state.message = 'Priority can`t be blank'
        },
        setClearMes(state) {
            state.message = ''
        },
        setGrid(state) {
            state.grid = true
        }
    },
    actions: {
    },
    getters: {
    }
})