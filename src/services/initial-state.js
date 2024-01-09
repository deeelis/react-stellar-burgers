export const initialState = {
  ingredients: {
    ingredients: [],
    ingredients_status: PENDING,
  },
  order_ingredients: {
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
  },
  order: {
    order_number: 0,
    order_number_status: PENDING,
  },
  current_item: {
    current_item: {},
    current_item_status: PENDING,
  },
};
