import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddeware from 'redux-saga';
import rootSaga from './saga';

import { HomeReducer } from '../features/home/home.reducer';
import { SplashReducer } from '../features/splash/splash.reducer';

const sagaMiddeware = createSagaMiddeware();

const store = createStore(
  combineReducers({
    home: HomeReducer,
    splash: SplashReducer,
  }),
  applyMiddleware(sagaMiddeware)
);

sagaMiddeware.run(rootSaga);

export default store;