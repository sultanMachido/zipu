import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';

// const middleware = [thunkMiddleware, logger];
const middleware = [thunkMiddleware];
export default function configureStore(initialState = {}) {
	const rootReducer = combineReducers({
		...reducers
	});
	const enhancer = compose(
		applyMiddleware(...middleware),
		window.devToolsExtension ? window.devToolsExtension() : (f) => f
	);
	return createStore(rootReducer, initialState, enhancer);
}
