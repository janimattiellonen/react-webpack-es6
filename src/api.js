import config from './config';
import axios from 'axios';
import { List } from 'immutable';

export default {
    getPlayers: (term) => {
    	return axios.get('/players?term=' + term).then(res => List(res.data));
    },

    getCourse: (courseId, layoutId) => {
    	return axios.get('/course', {
    		params: {
    			course: courseId,
    			layout: layoutId
    		}
    	}).then(res => List(res.data));
    },

    getCourses: (term) => {
    	return axios.get('/courses?term=' + term).then(res => List(res.data));
    }
};
