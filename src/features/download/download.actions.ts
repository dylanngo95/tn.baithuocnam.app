import DownloadTypes from './download.types';

export const downloadStart = () => ({
  type: DownloadTypes.DOWNLOAD_START,
});
export const downloadSuccess = () => ({
  type: DownloadTypes.DOWNLOAD_SUCCESS,
});
export const downloadError = (error: string) => ({
  type: DownloadTypes.DOWNLOAD_ERROR,
  error: error,
});

