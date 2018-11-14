import SplashTypes from './splash.types';
import { DataNews } from '../../data/local/models/DataNews';

export const checkDataLocalStart = () => ({
  type: SplashTypes.CHECK_DATA_LOCAL_START,
});
export const checkDataLocalDone = (isDataEmpty: boolean, isShowSplash: boolean) => ({
  type: SplashTypes.CHECK_DATA_LOCAL_DONE,
  isDataEmpty: isDataEmpty,
  isShowSplash: isShowSplash,
});
export const checkDataNews = (data: DataNews) => ({
  type: SplashTypes.CHECK_DATA_NEW,
  data: data,
});
export const checkDataError = (error: any) => ({
  type: SplashTypes.CHECK_DATA_ERROR,
  error: error,
});

export const setConnectedOn = () => ({
  type: SplashTypes.CONNECTED_ON,
});

export const setConnectedOff = () => ({
  type: SplashTypes.CONNECTED_OFF,
});

export const setConnectedState = (isConnected: boolean) => ({
  type: SplashTypes.SET_CONNECTED_STATE,
  isConnected: isConnected,
});

