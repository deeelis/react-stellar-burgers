import { CURRENT_ITEM, PENDING, SUCCESS } from "../actions";

const initialState = {
  current_item: {},
  current_item_status: PENDING,
};

export const ingredientDetailsModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_ITEM:
      return {
        ...state,
        current_item: action.current_item,
        current_item_status: SUCCESS,
      };
    default:
      return state;
  }
};
