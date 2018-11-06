import DownloadTypes from './download.types';

const initSate = {
  error: null,
};

export const DownloadReducer = (state = initSate, action: any) => {
  switch (action.type) {
    case DownloadTypes.DOWNLOAD_START:
      return state;
    case DownloadTypes.DOWNLOAD_SUCCESS:
      return state;
    case DownloadTypes.DOWNLOAD_ERROR:
      return {...state, error: action.error};
    default:
      return state;
  }
};
