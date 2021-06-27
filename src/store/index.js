import {createStore} from 'vuex'
import initialConfig from './initialConfig'
import axios from "axios";

export default createStore({
    state: () => ({
        appStatus: "In work",
        contactBook: []
    }),
    mutations: {
        setContacts(state, contactBookDada) {
            state.contactBook = contactBookDada
            console.log(state)
        }
    },
    actions: {
        async loadContactBook({dispatch,commit,getters}) {
            await dispatch('loadAppConfig')

            axios.get(getters.getContactBookUrl)
                .then(res => {
                    console.log(res.data.results)
                    // commit('setContacts', res.data)
                })
                // TODO: Add States Mutations and Components to render Loading and Error situations
                .catch(error => console.log(error))
        }
    },
    getters:{
        getContactBookUrl: state => {
            return state.initialConfig.userUrl + "/?results=" + state.initialConfig.numberCards
        },
        getContactByLetter: (state) => (letter) => {
            return state.contactBook.find(contact => contact.name.last[0] === letter.toUpperCase())
        }
    },
    modules: {
        initialConfig
    }
})
