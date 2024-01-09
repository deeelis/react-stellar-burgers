import { INGREDIENTS_LIST, SUCCESS, PENDING, FAILURE } from "./index";
import { URL } from "../../utils/const";

export function getIngredients() {
  return function (dispatch) {
    dispatch({
      type: PENDING,
    });
    fetch(URL + "/ingredients")
      .then((answer) => {
        if (answer.ok) {
          return answer.json();
        }
        return Promise.reject(`Ошибка ${answer.status}`);
      })
      .then((answer) => {
        if (answer.success) {
          dispatch({
            type: INGREDIENTS_LIST,
            ingredients: answer.data,
          });
          dispatch({
            type: SUCCESS,
          });
        } else {
          dispatch({
            type: FAILURE,
          });
          return Promise.reject(`Ошибка данных`);
        }
      })
      .catch((error) => {
        console.log(error.message);
        dispatch({
          type: FAILURE,
        });
      });
  };
}
