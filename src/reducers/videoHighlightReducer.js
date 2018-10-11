import * as actionTypes from '../actions/types';
import initialState from '../store/initialState';

const videoHighlightReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_VIDEO_HIGHLIGHTS:
            return {
                ...state,
                videoHighlights: action.payload
            };
        default:
            return state;
    }
}

export default videoHighlightReducer;