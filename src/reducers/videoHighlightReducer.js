import * as actionTypes from '../actions/types';
import initialState from '../store/initialState';

const videoHighlightReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_VIDEO_HIGHLIGHTS:
            return {
                ...state,
                videoHighlights: action.payload
            };
        case actionTypes.FETCH_SEEDOOTV_MUSIC_VIDEOS:
            return {
                ...state,
                musicVideos: action.payload
            };
        case actionTypes.FETCH_SEEDOOTV_MOVIES_VIDEOS:
            return {
                ...state,
                movieVideos: action.payload
            };
        case actionTypes.FETCH_SEEDOOTV_KIDDIES_VIDEOS:
            return {
                ...state,
                kiddiesVideos: action.payload
            };
        default:
            return state;
    }
}

export default videoHighlightReducer;