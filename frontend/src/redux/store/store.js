import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

export default function configureStore() {
  let store;
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(logger, thunk)));
  } else {
    store = createStore(rootReducer, {}, applyMiddleware(thunk));
  }

  return store;
}
