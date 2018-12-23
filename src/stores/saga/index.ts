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
import * as uuid from 'uuid/v1';


async function synchronizedCategory(): Promise<string> {
  try {
    console.log('start sync cate');
    const categories = await getAllCategory();
    console.log(categories);
    if (!categories) return Promise.reject('categoty is not define');
    const categoryRepository: CategoryRepository = new CategoryRepository();
    categories.forEach((element: any) => {
      categoryRepository.add({
        id: element._id,
        create: element.created,
        update: element.updated,
        name: element.name,
        description: element.description,
        index: element.index,
      });
    });
    console.log('end sync cate');
    return Promise.resolve('save category complete');
  } catch (ex) {
    console.log('category' + ex);
    return Promise.reject('error ' + ex);
  }
}

async function synchronizedContent(): Promise<string> {
  try {
    console.log('start sync content');
    const contents = await getAllContent();
    console.log(contents);
    if (!contents) return Promise.reject('content is not define');
    const contentRepository: ContentRepository = new ContentRepository();
    const tagRepository: TagRepository = new TagRepository();
    const categoryRepository: CategoryRepository = new CategoryRepository();

    contents.forEach((element: any) => {
      contentRepository.add({
        id: element._id,
        title: element.title,
        description: element.description,
        content: element.content,
        image: element.image,
        rate: element.rate ? element.rate : 5,
        auth: element.auth ? element.auth : 'baithuocnamhay',
        create: element.created,
        update: element.updated,
      });
      // Add TagModel
      console.warn('add mode');
      if (element.categories) {
        let categoryArr = element.categories.split(',');
        categoryArr.forEach((item: any) => {
          const uuidRandom = uuid();
          if (item.trim() !== '') {
            const category = categoryRepository.getSingleByIndex(item.trim());
            tagRepository.add({
              id: uuidRandom,
              categoryId: (category as any).id,
              contentId: element._id,
            });
          }
        });
      }
    });
    console.log('end sync content');
    return Promise.resolve('save content complete');
  } catch (ex) {
    console.log('error ' + ex);
    return Promise.reject('error ' + ex);
  }
}

function* setConnectedOn() {
  yield put({
    type: SplashTypes.SET_CONNECTED_STATE,
    isConnected: true,
  });
}

function* setConnectedOff() {
  yield put({
    type: SplashTypes.SET_CONNECTED_STATE,
    isConnected: false,
  });
}


function* downloadStart() {
  console.log('download start is runing');
  let isError = true;

  try {
    const categoryRepository: CategoryRepository = new CategoryRepository();

    if (categoryRepository.count() <= 0) {
      yield call(synchronizedCategory);
    } else {
      console.log('category dont empty');
    }
  } catch (ex) {
    console.warn('save category is error');
    isError = false;
  }

  try {
    const contentRepository: ContentRepository = new ContentRepository();

    if (contentRepository.count() <= 0) {
      yield call(synchronizedContent);
    } else {
      console.log('content dont empty');
    }
  } catch (ex) {
    console.warn('save content is error');
    isError = false;
  }

  // if (isError) {
  console.log('dowload complete');
  yield put({
    type: SplashTypes.CHECK_DATA_LOCAL_DONE,
    isDataEmpty: false,
    isShowSplash: false,
  });
  // }

}

function* checkDataLocal() {
  // const contentRepository: ContentRepository = new ContentRepository();
  // yield contentRepository.deleteAll();
  yield put({
    type: SplashTypes.CHECK_DATA_LOCAL_DONE,
    isDataEmpty: true,
    isShowSplash: false,
  });
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
  console.warn(categories.length);

  yield put({
    type: MenuMedicamentTypes.SET_DATA_CATEGORY,
    categories: categories,
  });

  const categoryId = yield select(selectCategoryId);
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
  yield takeLatest(SplashTypes.CHECK_DATA_LOCAL_START, checkDataLocal);
  yield takeLatest(SplashTypes.CONNECTED_ON, setConnectedOn);
  yield takeLatest(SplashTypes.CONNECTED_OFF, setConnectedOff);
  yield takeLatest(DownloadTypes.DOWNLOAD_START, downloadStart);
  yield takeLatest(MenuMedicamentTypes.GET_DATA, getDataLocal);
  yield takeLatest(MenuMedicamentTypes.CHANGE_CATEGORY, changeCategory);
}

export default rootSaga;