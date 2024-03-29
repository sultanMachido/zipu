import './ui/atoms/styles/_base.scss';
// import '@kenshooui/react-multi-select/dist/style.css';
// import 'rsuite/lib/styles/index.less';
// import './index.scss';
import 'antd/dist/antd.css';

import { ModalProvider } from 'providers/ModalProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/store';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';

const store = configureStore({});
const rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<ModalProvider>
			<Routes />
		</ModalProvider>
	</Provider>,
	rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
