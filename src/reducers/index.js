import { combineReducers } from 'redux';
import videoHighlights from './videoHighlightReducer';
import newsBits from './newsBitReducer';

const rootReducer = combineReducers({
    VH: videoHighlights,
    NB: newsBits
});

export default rootReducer;