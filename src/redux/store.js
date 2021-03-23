import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import thunkMiddleware from 'redux-thunk';

// const middleware = [thunkMiddleware, logger];
const middleware = [thunkMiddleware, logger];
export default function configureStore(initialState = {}) {
	const rootReducer = combineReducers({
		...reducers
	});
	const enhancer = compose(
		applyMiddleware(...middleware),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	);
	return createStore(rootReducer, initialState, enhancer);
}
