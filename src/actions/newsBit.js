import * as actionTypes from './types';
import axios from 'axios';

// const Base_URL = 'http://localhost:3000/api';
// const Base_URL = 'http://tv.seedoo.tv/news/news-jason.php?category';
const Base_URL = 'http://seedoo.tv/apis/news-jason.php?category';

export const fetchNewsBits = (news) => {
    return {
        type: actionTypes.FETCH_NEWS_BITS,
        payload: news
    }
};
export const fetchEntertianmentNews = (news) => {
    return {
        type: actionTypes.FETCH_SEEDOOTV_ENTERTAINMENT_NEWS,
        payload: news
    }
};
export const fetchAfricanNews = (news) => {
    return {
        type: actionTypes.FETCH_SEEDOOTV_AFRICAN_NEWS,
        payload: news
    }
};
export const fetchHumanNews = (news) => {
    return {
        type: actionTypes.FETCH_SEEDOOTV_HUMAN_NEWS,
        payload: news
    }
};

export const fetchAllNewsBits = () => {
    return (dispatch) => {
        return axios.get(`${Base_URL}=2`)
            // return axios.get(`${Base_URL}/seedooNews2.json`)
            .then(response => {
                dispatch(fetchNewsBits(response.data.posts))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const fetchAllEntertianmentNews = () => {
    return (dispatch) => {
        return axios.get(`${Base_URL}=3`)
            // return axios.get(`${Base_URL}/seedooNews2.json`)
            .then(response => {
                dispatch(fetchEntertianmentNews(response.data.posts))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const fetchAllAfricanNews = () => {
    return (dispatch) => {
        return axios.get(`${Base_URL}=5`)
            // return axios.get(`${Base_URL}/seedooNews2.json`)
            .then(response => {
                dispatch(fetchAfricanNews(response.data.posts))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const fetchAllHumanNews = () => {
    return (dispatch) => {
        return axios.get(`${Base_URL}=4`)
            // return axios.get(`${Base_URL}/seedooNews2.json`)
            .then(response => {
                dispatch(fetchHumanNews(response.data.posts))
            })
            .catch(error => {
                throw (error);
            });
    };
};