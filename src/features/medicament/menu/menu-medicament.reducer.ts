import { MenuMedicamentTypes } from './menu-medicament.types';

const initstate = {
  categories: [],
  contents: [],
  categoryId: 1,
};

export const MenuMedicamentReducer = (state = initstate, action: any) => {
  switch (action.type) {
    case MenuMedicamentTypes.SET_DATA_CONTENT:
      return {...state, contents: action.contents};
    case MenuMedicamentTypes.SET_DATA_CATEGORY:
      return {...state, categories: action.categories};
    case MenuMedicamentTypes.CHANGE_CATEGORY_ID:
      return {...state, categoryId: action.categoryId};
    default:
      return state;
  }
};