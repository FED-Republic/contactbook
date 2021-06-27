import axios from 'axios'

const CONFIG_URL = "/configuration.json"

const state = {
    title: null,
    userUrl: null,
    numberCards: null,
    tabs: []
};

const mutations = {
    setConfig(state, configuration) {
        state = configuration
    }
}

const actions = {
    loadAppConfig({commit}, configUrl = CONFIG_URL ){
        axios.get(configUrl)
            .then(res => {
                console.log(res)
                const data = res.data
                commit('setConfig', res.data)
            })
            // TODO: Add mutation for it later
            .catch(error => console.log(error))
    }
}

export default {
    state,
    mutations,
    actions
};
