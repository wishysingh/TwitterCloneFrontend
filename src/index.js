import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

ReactDOM.render(
<Provider store={store}>
 <App />
 </Provider>, document.getElementById('root'));
registerServiceWorker();