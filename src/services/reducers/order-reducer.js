import { ORDER_NUMBER, PENDING, SUCCESS } from "../actions";

const initialState = {
  order_number: 0,
  order_number_status: PENDING,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_NUMBER: {
      return {
        ...state,
        order_number: action.order_number,
        order_number_status: SUCCESS,
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
