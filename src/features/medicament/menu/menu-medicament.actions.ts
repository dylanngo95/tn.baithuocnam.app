import { MenuMedicamentTypes } from './menu-medicament.types';
import { Content } from '../../../data/local/models/Content';
import { Category } from '../../../data/local/models/Category';

export const getData = () => ({
  type: MenuMedicamentTypes.GET_DATA,
});

export const changeCategory = (categoryId: number) => ({
  type: MenuMedicamentTypes.CHANGE_CATEGORY,
  categoryId: categoryId,
});

export const changeCategoryId = (categoryId: number) => ({
  type: MenuMedicamentTypes.CHANGE_CATEGORY_ID,
  categoryId: categoryId,
});

export const setDataContent = (contents: Content) => ({
  type: MenuMedicamentTypes.SET_DATA_CONTENT,
  contents: contents,
});

export const setDataCategory = (categories: Category) => ({
  type: MenuMedicamentTypes.SET_DATA_CONTENT,
  categories: categories,
});