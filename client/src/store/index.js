
import { createStore, applyMiddleware, compose } from 'redux';

import restaurant from '../middlewares/restaurant';
import user from '../middlewares/user';

import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
      restaurant,
      user
    ),
);

const store = createStore(reducer, enhancers);

export default store;