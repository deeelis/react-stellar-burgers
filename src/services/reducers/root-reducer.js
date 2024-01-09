import { combineReducers } from "redux";

import { ingredientsReducer } from "./ingredients-reducer";
import { constructorReducer } from "./constructor-reducer";
import { ingredientDetailsModalReducer } from "./ingredient-details-modal-reducer";
import { orderReducer } from "./order-reducer";

const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  ingredientsDetailModal: ingredientDetailsModalReducer,
  order: orderReducer,
});

export default rootReducer;
