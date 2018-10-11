import * as actionTypes from './types';
import axios from 'axios';

const Base_URL = 'http://localhost:3000/api/newsBit.json';

export const fetchNewsBits = (news) => {
    return {
        type: actionTypes.FETCH_NEWS_BITS,
        payload: news
    }
};

export const fetchAllNewsBits = () => {
    return (dispatch) => {
        return axios.get(Base_URL)
            .then(response => {
                console.log(response.data);
                dispatch(fetchNewsBits(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};