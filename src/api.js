import config from './config';
import axios from 'axios';
import { List } from 'immutable';

export default {
    getStatuses: () => {
        return axios.get('/statuses').then(res => List(res.data));
    },

    getPlayers: () => {
    	return axios.get('/players').then(res => List(res.data));
    },

    getCourses: (term) => {
    	return axios.get('/courses?term=' + term).then(res => List(res.data));
    }
};
