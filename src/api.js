import config from './config';
import axios from 'axios';
import { List } from 'immutable';

export default {
    getStatuses: () => {
        return axios.get('/statuses').then(res => List(res.data));
    },
};
