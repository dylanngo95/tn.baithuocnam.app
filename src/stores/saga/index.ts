import { takeEvery, takeLatest, take, put, call } from 'redux-saga/effects';
import DownloadTypes from '../../features/download/download.types';
import { ContentRepository } from '../../data/local/repository/ContentRepository';
import SplashTypes from '../../features/splash/splash.types';
import { CategoryRepository } from '../../data/local/repository/CategoryRepository';

async function getAllCategory() {
  try {
    let response = await fetch(
      'https://us-central1-baithuocnamhay-93058.cloudfunctions.net/api/v1/category/get'
    );
    let responseJson = await response.json();
    console.log(responseJson);
    const categoryRepository: CategoryRepository = new CategoryRepository();
    if (!responseJson.result.data) return;
    responseJson.result.data.forEach((element: any) => {
      categoryRepository.add({
        id: element.id,
        create: element.create,
        update: element.update,
        name: element.name,
        description: element.description,
        index: element.index,
      });
    });
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
    const contentRepository: ContentRepository = new ContentRepository();
    if (!responseJson.result.data) return;

    responseJson.result.data.forEach((element: any) => {
      contentRepository.add({
        id: element.id,
        title: element.title,
        description: element.description,
        content: element.content,
        categories: element.category,
        image: element.image,
        rate: element.rate ? element.rate : 5,
        auth: element.auth ? element.auth : 'baithuochay',
        create: element.create,
        update: element.update,
      });
    });
    return responseJson.result.data;
  } catch (error) {
    console.error(error);
  }
}

function* downloadStart() {
  console.log('start download...');
  let contents = yield call(getAllContent);
  let categories = yield call(getAllCategory);
  console.log('save data to db success');
  yield put({
    type: SplashTypes.CHECK_DATA_LOCAL_DONE,
    isDataEmpty: false,
    isShowSplash: false,
  });
}

function* checkDataLocal() {
  console.log('check data local');
  const contentRepository: CategoryRepository = new CategoryRepository();
  const categoryRepository: CategoryRepository = new CategoryRepository();

  if (contentRepository.count() > 0 && categoryRepository.count() > 0) {
    console.log('data exists');
    yield put({
      type: SplashTypes.CHECK_DATA_LOCAL_DONE,
      isDataEmpty: false,
      isShowSplash: false,
    });
  } else {
    console.log('data empty');
    yield put({
      type: SplashTypes.CHECK_DATA_LOCAL_DONE,
      isDataEmpty: true,
      isShowSplash: false,
    });
  }
}

function* rootSaga() {
  yield takeLatest(DownloadTypes.DOWNLOAD_START, downloadStart);
  yield takeLatest(SplashTypes.CHECK_DATA_LOCAL_START, checkDataLocal);
}


export default rootSaga;