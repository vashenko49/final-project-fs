import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const logger = createLogger();

export default function configureStore() {
  return createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(logger, thunk)));
}
