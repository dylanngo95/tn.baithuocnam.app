import SplashTypes from './splash.types';

const initSate = {
  error: null,
  isDataEmpty: false,
  isShowSplash: true,
  countContentNew: 0,
  countCategoryNew: 0,
};

export const SplashReducer = (state = initSate, action: any) => {
  switch (action.type) {
    case SplashTypes.CHECK_DATA_NEW:
      return {...state, countContentNew: action.countContentNew, countCategoryNew: action.countCategoryNew};
    case SplashTypes.CHECK_DATA_LOCAL_START:
      return state;
    case SplashTypes.CHECK_DATA_LOCAL_DONE:
      return {...state, isDataEmpty: action.isDataEmpty, isShowSplash: action.isShowSplash};
    case SplashTypes.CHECK_DATA_ERROR:
      return {...state, error: action.error};
    default:
      return state;
  }
};
