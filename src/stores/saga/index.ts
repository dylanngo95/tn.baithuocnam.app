import { takeEvery, takeLatest, take, put, call } from 'redux-saga/effects';
import DownloadTypes from '../../features/download/download.types';
import { ContentRepository } from '../../data/local/repository/ContentRepository';
import SplashTypes from '../../features/splash/splash.types';
import { CategoryRepository } from '../../data/local/repository/CategoryRepository';
import { getAllCategory } from '../../data/api/category.api';
import { getAllContent } from '../../data/api/content.api';
import { MedicamentTypes } from '../../features/medicament/medicament.types';

async function synchronizedCategory() {
  const categories = await getAllCategory();
  if (!categories.result.data) return;
  const categoryRepository: CategoryRepository = new CategoryRepository();
  categories.result.data.forEach((element: any) => {
    categoryRepository.add({
      id: element.id,
      create: element.create,
      update: element.update,
      name: element.name,
      description: element.description,
      index: element.index,
    });
  });
}

async function synchronizedContent() {
  const contents = await getAllContent();
  if (!contents.result.data) return;
  const contentRepository: ContentRepository = new ContentRepository();
  contents.result.data.forEach((element: any) => {
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
}

function* downloadStart() {
  console.log('start download...');
  let contents = yield call(synchronizedContent);
  let categories = yield call(synchronizedCategory);
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

function* getDataLocal() {
  const categoryRepository: CategoryRepository = new CategoryRepository();
  const contentRepository: ContentRepository = new ContentRepository();

  let categories = categoryRepository.getAll();
  let contents = contentRepository.getAll();

  yield put({
    type: MedicamentTypes.SET_DATA_CATEGORY,
    categories: categories,
  });

  yield put({
    type: MedicamentTypes.SET_DATA_CONTENT,
    contents: contents,
  });

}

function* rootSaga() {
  yield takeLatest(DownloadTypes.DOWNLOAD_START, downloadStart);
  yield takeLatest(SplashTypes.CHECK_DATA_LOCAL_START, checkDataLocal);
  yield takeLatest(MedicamentTypes.GET_DATA, getDataLocal);
}

export default rootSaga;