import * as actionTypes from './types';
import axios from 'axios';

const Base_URL = 'http://localhost:3000/api';
// const Base_URL = 'http://seedoo.tv/website-videos-sjason.php?category';

export const fetchVideoHighlights = (videos) => {
    return {
        type: actionTypes.FETCH_VIDEO_HIGHLIGHTS,
        payload: videos
    }
};
export const fetchKiddiesVideos = (videos) => {
    return {
        type: actionTypes.FETCH_SEEDOOTV_KIDDIES_VIDEOS,
        payload: videos
    }
};
export const fetchMusicVideos = (videos) => {
    return {
        type: actionTypes.FETCH_SEEDOOTV_MUSIC_VIDEOS,
        payload: videos
    }
};
export const fetchMovieVideos = (videos) => {
    return {
        type: actionTypes.FETCH_SEEDOOTV_MOVIES_VIDEOS,
        payload: videos
    }
};

export const fetchAllVideoHighlights = () => {
    return (dispatch) => {
        // return axios.get(`${Base_URL}=1`)
        return axios.get(`${Base_URL}/seedooVids1.json`)
            .then(response => {
                dispatch(fetchVideoHighlights(response.data.posts))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const fetchAllKiddiesVideos = () => {
    return (dispatch) => {
        // return axios.get(`${Base_URL}=3`)
        return axios.get(`${Base_URL}/seedooVids1.json`)
            .then(response => {
                dispatch(fetchKiddiesVideos(response.data.posts))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const fetchAllMusicVideos = () => {
    return (dispatch) => {
        // return axios.get(`${Base_URL}=4`)
        return axios.get(`${Base_URL}/seedooVids1.json`)
            .then(response => {
                dispatch(fetchMusicVideos(response.data.posts))
            })
            .catch(error => {
                throw (error);
            });
    };
};
export const fetchAllMovieVideos = () => {
    return (dispatch) => {
        // return axios.get(`${Base_URL}=2`)
        return axios.get(`${Base_URL}/seedooVids1.json`)
            .then(response => {
                dispatch(fetchMovieVideos(response.data.posts))
            })
            .catch(error => {
                throw (error);
            });
    };
};