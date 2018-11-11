import { takeEvery, takeLatest, take, put, call, select } from 'redux-saga/effects';
import DownloadTypes from '../../features/download/download.types';
import { ContentRepository } from '../../data/local/repository/ContentRepository';
import SplashTypes from '../../features/splash/splash.types';
import { CategoryRepository } from '../../data/local/repository/CategoryRepository';
import { getAllCategory } from '../../data/api/category.api';
import { getAllContent } from '../../data/api/content.api';
import { MenuMedicamentTypes } from '../../features/medicament/menu/menu-medicament.types';
import { TagRepository } from '../../data/local/repository/TagRepository';
import { Tag } from '../../data/local/models/Tag';
import { Content } from '../../data/local/models/Content';

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
  const tagRepository: TagRepository = new TagRepository();

  contents.result.data.forEach((element: any) => {

    contentRepository.add({
      id: element.id,
      title: element.title,
      description: element.description,
      content: element.content,
      categories: element.categories,
      image: element.image,
      rate: element.rate ? element.rate : 5,
      auth: element.auth ? element.auth : 'baithuochay',
      create: element.create,
      update: element.update,
    });
    // Add TagModel
    if (element.categories) {
      let categoryArr = element.categories.split(',');
      categoryArr.forEach((item: any) => {
        if (item.trim() !== '') {
          tagRepository.addIdIncrement({
            id: element.id,
            // tslint:disable-next-line:radix
            categoryId: parseInt(item),
            contentId: element.id,
          });
        }
      });
    }

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
  // console.log('check data local');
  const contentRepository: CategoryRepository = new CategoryRepository();
  const categoryRepository: CategoryRepository = new CategoryRepository();

  if (contentRepository.count() > 0 && categoryRepository.count() > 0) {
    // console.log('data exists');
    yield put({
      type: SplashTypes.CHECK_DATA_LOCAL_DONE,
      isDataEmpty: false,
      isShowSplash: false,
    });
  } else {
    // console.log('data empty');
    yield put({
      type: SplashTypes.CHECK_DATA_LOCAL_DONE,
      isDataEmpty: true,
      isShowSplash: false,
    });
  }
}

/**
 * Selector
 */
export const selectCategoryId = (state: any) => state.medicament.categoryId;

function* getDataLocal() {
  const categoryRepository: CategoryRepository = new CategoryRepository();
  const contentRepository: ContentRepository = new ContentRepository();
  const tagRepository: TagRepository = new TagRepository();

  let categories = categoryRepository.getAll();
  yield put({
    type: MenuMedicamentTypes.SET_DATA_CATEGORY,
    categories: categories,
  });

  const categoryId = yield select(selectCategoryId);
  const listContentInTag = tagRepository.getByCategoryId(categoryId);
  // let contents = contentRepository.getAll();
  let contents: Content[] = [];
  listContentInTag.forEach((item: Tag) => {
    const content = contentRepository.getSingle(item.contentId);
    contents.push(<Content>content);
  });

  yield put({
    type: MenuMedicamentTypes.SET_DATA_CONTENT,
    contents: contents,
  });

}

function* changeCategory(action: any) {

  const contentRepository: ContentRepository = new ContentRepository();
  const tagRepository: TagRepository = new TagRepository();

  const categoryId = action.categoryId;
  const listContentInTag = tagRepository.getByCategoryId(categoryId);
  let contents: Content[] = [];
  listContentInTag.forEach((item: Tag) => {
    const content = contentRepository.getSingle(item.contentId);
    contents.push(<Content>content);
  });

  yield put({
    type: MenuMedicamentTypes.SET_DATA_CONTENT,
    contents: contents,
  });

  yield put({
    type: MenuMedicamentTypes.CHANGE_CATEGORY_ID,
    categoryId: categoryId,
  });

}

function* rootSaga() {
  yield takeLatest(DownloadTypes.DOWNLOAD_START, downloadStart);
  yield takeLatest(SplashTypes.CHECK_DATA_LOCAL_START, checkDataLocal);
  yield takeLatest(MenuMedicamentTypes.GET_DATA, getDataLocal);
  yield takeLatest(MenuMedicamentTypes.CHANGE_CATEGORY, changeCategory);
}

export default rootSaga;