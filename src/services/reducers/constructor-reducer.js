import {
  ORDER,
  RESET_ORDER,
  MOVE_INGREDIENT,
  DELETE_ITEM,
  PENDING,
  SUCCESS,
} from "../actions";

const initialState = {
  order_ingredients: {
    buns: {},
    ingredients: [],
    sum: 0,
    counts: {},
  },
  order_status: PENDING,
  reset_order_status: PENDING,
  delete_item_status: PENDING,
  move_ingredient_status: PENDING,
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER:
      return {
        ...state,
        order_ingredients: {
          counts: {
            ...state.order_ingredients.counts,
            [state.order_ingredients.buns._id]:
              action.item.type === "bun" ? 0 : 1,
            [action.item._id]:
              action.item.type === "bun"
                ? 1
                : (state.order_ingredients.counts[action.item._id] || 0) + 1,
          },
          buns: action.buns,
          ingredients: action.order_ingredients,
          sum: action.sum,
        },
        order_status: SUCCESS,
      };
    case RESET_ORDER: {
      return {
        ...state,
        order_ingredients: {
          counts: {},
          buns: {},
          ingredients: [],
          sum: 0,
        },
        reset_order_status: SUCCESS,
      };
    }
    case DELETE_ITEM:
      return {
        ...state,
        order_ingredients: {
          ...state.order_ingredients,
          ingredients: [...state.order_ingredients.ingredients].filter(
            (item) => item.index !== action.index
          ),
          sum: action.sum,
          counts: {
            ...state.order_ingredients.counts,
            [action.item._id]:
              state.order_ingredients.counts[action.item._id] - 1,
          },
        },
        delete_item_status: SUCCESS,
      };
    case MOVE_INGREDIENT:
      const prevItems = [...state.order_ingredients.ingredients];
      prevItems.splice(
        action.toIndex,
        0,
        prevItems.splice(action.fromIndex, 1)[0]
      );
      return {
        ...state,
        order_ingredients: {
          ...state.order_ingredients,
          ingredients: prevItems,
        },
        move_ingredient_status: SUCCESS,
      };
    default:
      return state;
  }
};
