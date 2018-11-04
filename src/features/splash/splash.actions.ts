import SplashTypes from './splash.types';
import { Content } from '../../data/local/models/Content';

export const downloadStart = () => ({
  type: SplashTypes.DOWNLOAD_START,
});
export const downloadSuccess = (contents: Content[]) => ({
  type: SplashTypes.DOWNLOAD_SUCCESS,
  contents: contents,
});
export const downloadError = (error: string) => ({
  type: SplashTypes.DOWNLOAD_ERROR,
  error: error,
});

