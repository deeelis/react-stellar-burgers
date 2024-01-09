import { INGREDIENTS_LIST, PENDING, SUCCESS } from "../actions";

const initialState = {
  ingredients: [],
  ingredients_status: PENDING,
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INGREDIENTS_LIST:
      return {
        ...state,
        ingredients: action.ingredients,
        ingredients_status: SUCCESS,
      };
    default:
      return state;
  }
};
