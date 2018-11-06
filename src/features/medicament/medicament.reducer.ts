import { MedicamentTypes } from './medicament.types';

const initstate = {
  categories: [],
  contents: [],
};

export const MedicamentReducer = (state = initstate, action: any) => {
  switch (action.type) {
    case MedicamentTypes.SET_DATA_CONTENT:
      return {...state, contents: action.contents};
    case MedicamentTypes.SET_DATA_CATEGORY:
      return {...state, categories: action.categories};
    default:
      return state;
  }
};