import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.scss';
import App from './App';
import app from './reducers/appReducer';
import Modal from 'react-modal';
import { createEpicMiddleware } from 'redux-observable';
import { combineEpics } from 'redux-observable';

import { pendingLogoutEpics } from './epics/pendingLogoutEpics';
import { newsEpics } from './epics/newsEpics';
import { logInEpics } from './epics/logInEpics';
import { helperEpics } from './epics/helperEpics';
import { employeeDetailsEpics } from './epics/employeeDetailsEpics';
import { productsSortBysEpics } from './epics/productsSortBysEpics';
import { productsEpics } from './epics/productsEpics';
import { pendingProductsEpics } from './epics/pendingProductsEpics';
import { htmlPagesEpics } from './epics/htmlPagesEpics';
import { employeesEpics } from './epics/employeesEpics'; 
import { categoriesEpics } from './epics/categoriesEpics'; 

Modal.setAppElement('#root');

const rootEpic = combineEpics(
    newsEpics,
    logInEpics,
    pendingLogoutEpics,
    helperEpics,
    employeeDetailsEpics,
    productsSortBysEpics,
    productsEpics,
    pendingProductsEpics,
    htmlPagesEpics,
    employeesEpics,
    categoriesEpics
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    app,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        epicMiddleware
    )
);

epicMiddleware.run(rootEpic);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
