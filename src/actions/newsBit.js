import * as actionTypes from './types';
import axios from 'axios';

const Base_URL = 'http://localhost:3000/api/seedooNews2.json';
// const Base_URL = 'http://tv.seedoo.tv/news/news-jason.php?category=2';

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
                // console.log(response.data.posts);
                dispatch(fetchNewsBits(response.data.posts))
            })
            .catch(error => {
                throw (error);
            });
    };
};