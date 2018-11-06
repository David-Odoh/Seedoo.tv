import * as actionTypes from '../actions/types';
import initialState from '../store/initialState';

const newsBitReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEWS_BITS:
            return {
                ...state,
                newsBits: action.payload
            };
        case actionTypes.FETCH_SEEDOOTV_ENTERTAINMENT_NEWS:
            return {
                ...state,
                entertainmentNews: action.payload
            };
        case actionTypes.FETCH_SEEDOOTV_AFRICAN_NEWS:
            return {
                ...state,
                africanNews: action.payload
            };
        case actionTypes.FETCH_SEEDOOTV_HUMAN_NEWS:
            return {
                ...state,
                humanNews: action.payload
            };
        default:
            return state;
    }
}

export default newsBitReducer;