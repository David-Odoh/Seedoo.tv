import * as actionTypes from '../actions/types';
import initialState from '../store/initialState';

const tabScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_HOMESCREEN_VIDEOS:
            return {
                ...state,
                tabScreenVids: action.payload

            };
        default:
            return state;
    }
}

export default tabScreenReducer;