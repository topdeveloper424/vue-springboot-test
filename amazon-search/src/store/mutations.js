import { types } from './mutation-types'

export default {
    [types.SAVE_LAST_HISTORY](state, payload) {
        state.lastHistories.push(payload)
    },
    [types.SAVE_MISSING_DATES](state, payload) {
        state.missingDates = payload
    },
    [types.UDPATE_SEARCH_PARAMS](state, payload) {
        state.searchParams = payload
    },

}