import * as actionTypes from './types';
import axios from 'axios';

const Base_URL = 'http://localhost:3000/api/videoHighlight.json';

export const fetchVideoHighlights = (videos) => {
    return {
        type: actionTypes.FETCH_VIDEO_HIGHLIGHTS,
        payload: videos
    }
};

export const fetchAllVideoHighlights = () => {
    return (dispatch) => {
        return axios.get(Base_URL)
            .then(response => {
                console.log(response.data);
                dispatch(fetchVideoHighlights(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};