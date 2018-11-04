import SplashTypes from './splash.types';

const initSate = {
  contents: [],
  error: null,
};

export const SplashReducer = (state = initSate, action: any) => {
  switch (action.type) {
    case SplashTypes.DOWNLOAD_START:
      return state;
    case SplashTypes.DOWNLOAD_SUCCESS:
      return {...state, contents: action.contents};
    case SplashTypes.DOWNLOAD_ERROR:
      return {...state, error: action.error};
    default:
      return state;
  }
};
