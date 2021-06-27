import axios from 'axios'
import {createStore} from "vuex";

const CONFIG_URL = "/configuration.json"

export default {
    state: () => ({
        appStatus: "In work",
        title: null,
        userUrl: null,
        numberCards: null,
        tabs: []
    }),
    mutations: {
        setConfig(state, configuration) {
            Object.assign( state, configuration)
        }
    },
    actions: {
        async loadAppConfig({commit}, configUrl = CONFIG_URL) {
            return axios.get(configUrl)
                .then(res => {
                    commit('setConfig', res.data)
                })
                // TODO: Add States Mutations and Components to render Loading and Error situations
                .catch(error => console.log(error))
        }
    }
}
