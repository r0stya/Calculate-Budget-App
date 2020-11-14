import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        list: {},
    },
    mutations: {
        ADD_ITEM(state, item) {
            Vue.set(state.list, item.id, item)
        },
        DELETE_ITEM(state, id) {
            Vue.delete(state.list, id)
        }
    },
    actions: {
        addNewItem({ commit }, item) {
            if(item.type === 'OUTCOME') item.value = Number('-' + item.value)
            const newObj = {
                ...item,
                id: String(Math.random())
              }
            commit('ADD_ITEM', newObj)
        }
    },
    getters: {
        getListItem(state) {
            return state.list
        }
    }
})