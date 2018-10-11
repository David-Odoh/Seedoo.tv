import * as actionTypes from '../actions/types';
import initialState from '../store/initialState';

const newsBitReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEWS_BITS:
            return {
                ...state,
                newsBits: action.payload
            };
        default:
            return state;
    }
}

export default newsBitReducer;