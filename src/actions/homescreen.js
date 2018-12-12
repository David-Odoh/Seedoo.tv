import * as actionTypes from './types';
import axios from 'axios';


// const Base_URL = 'http://localhost:3000/api';

export const fetchHomeScreenVids = (videos) => {
    return {
        type: actionTypes.FETCH_HOMESCREEN_VIDEOS,
        payload: videos
    }
};

export const fetchAllHomeScreenVids = () => {
    return (dispatch) => {
        return axios.get('http://seedoo.tv/apis/mainscreejson.php')
            // return axios.get('http://tv.seedoo.tv/taxi/mainscreejson.php')
            // return axios.get(`${Base_URL}/homescreen.json`)
            .then(response => {
                dispatch(fetchHomeScreenVids(response.data.posts))
            })
            .catch(error => {
                throw (error);
            });
    };
};