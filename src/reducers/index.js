import { combineReducers } from 'redux';
import videoHighlights from './videoHighlightReducer';
import newsBits from './newsBitReducer';
import tabScreenVids from './tabScreenReducer'

import messages from './messageReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    VH: videoHighlights,
    NB: newsBits,
    Mgs: messages,
    form: formReducer,
    TSV: tabScreenVids
});

export default rootReducer;