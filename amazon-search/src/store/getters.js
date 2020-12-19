import axios from 'axios'
import { LayoutPlugin } from 'bootstrap-vue';
import {Conf} from './../../config'

export default {
     getPageData : async (state)=> {
        try {
            const data = await axios.get(Conf.serverURL + 'data/getData')
            return data;
        } catch (e) {
            return null;
        }
    },

    login : (state)=> async (payload) =>{
        try {
            const {username, password} = payload;
            const data = await axios.post(Conf.serverURL + 'auth/login', {username:username, password:password})
            return data;
        } catch (e) {
            return null;
        }

    }

}