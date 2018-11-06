import { MedicamentTypes } from './medicament.types';
import { Content } from '../../data/local/models/Content';
import { Category } from '../../data/local/models/Category';

export const getData = () => ({
  type: MedicamentTypes.GET_DATA,
});

export const setDataContent = (contents: Content) => ({
  type: MedicamentTypes.SET_DATA_CONTENT,
  contents: contents,
});

export const setDataCategory = (categories: Category) => ({
  type: MedicamentTypes.SET_DATA_CONTENT,
  categories: categories,
});