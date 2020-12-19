import { types } from './mutation-types'
import {Conf} from './../../config'
import axios from 'axios'

export default {

    async storeHistory({ commit }, payload) {
        try {
            const {data} = await axios.get(Conf.serverURL + 'history/getLastHistory')
            if(data){
                commit(types.SAVE_LAST_HISTORY, data)
            }
        } catch (e) {
        }
    },
    async saveMissingDates({ commit }, payload) {
        try {
            const {data} = await axios.get(Conf.serverURL + 'data/getMissingDates')
            console.log("data",data)
            if(data.length > 0){
                commit(types.SAVE_MISSING_DATES, data)
            }
        } catch (e) {
        }
    },

    updateSearchParams({commit}, payload){
        commit(types.UDPATE_SEARCH_PARAMS, payload)
    },

    async saveSearch({commit}, payload){
        try {
            const {data} = await axios.post(Conf.serverURL + 'search/saveSearch', payload)
            console.log("data",data)  
        } catch (e) {
        }

    }

}