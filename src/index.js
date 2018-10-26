import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import rootReducer from './reducers';
import { fetchAllVideoHighlights } from './actions/videoHighlights';
import { fetchAllNewsBits } from './actions/newsBit';
import routes from './routes';

import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(fetchAllVideoHighlights());
store.dispatch(fetchAllNewsBits());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            {routes()}
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
