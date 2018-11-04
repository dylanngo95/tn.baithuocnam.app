import { takeEvery, take, put, call } from 'redux-saga/effects';
import SplashTypes from '../../features/splash/splash.types';

async function getAllCategory() {
  try {
    let response = await fetch(
      'https://us-central1-baithuocnamhay-93058.cloudfunctions.net/api/v1/category/get'
    );
    let responseJson = await response.json();
    return responseJson.result.data;
  } catch (error) {
    console.error(error);
  }
}

async function getAllContent() {
  try {
    let response = await fetch(
      'https://us-central1-baithuocnamhay-93058.cloudfunctions.net/api/v1/content/get'
    );
    let responseJson = await response.json();
    console.log(responseJson);
    return responseJson.result.data;
  } catch (error) {
    console.error(error);
  }
}

function* downloadStart() {
  let contents = yield call(getAllContent);
  yield put({
    type: SplashTypes.DOWNLOAD_SUCCESS,
    contents: contents,
  });
}

// function* downloadSuccess() {

// }

// function* downloadError() {

// }

function* rootSaga() {
  yield takeEvery(SplashTypes.DOWNLOAD_START, downloadStart);
}


export default rootSaga;