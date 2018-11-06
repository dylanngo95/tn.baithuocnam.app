import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddeware from 'redux-saga';
import rootSaga from './saga';

import { HomeReducer } from '../features/home/home.reducer';
import { SplashReducer } from '../features/splash/splash.reducer';
import { DownloadReducer } from '../features/download/download.reducer';

const sagaMiddeware = createSagaMiddeware();

const store = createStore(
  combineReducers({
    home: HomeReducer,
    splash: SplashReducer,
    download: DownloadReducer,
  }),
  applyMiddleware(sagaMiddeware)
);

sagaMiddeware.run(rootSaga);

export default store;