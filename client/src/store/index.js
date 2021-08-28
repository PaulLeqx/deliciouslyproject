
import { createStore, applyMiddleware, compose } from 'redux';

import restaurant from '../middlewares/restaurant';

import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
      restaurant,
    ),
);

const store = createStore(reducer, enhancers);

export default store;