import { INGREDIENTS_LIST } from "./index";
import { URL } from "../../utils/const";

export function getIngredients() {
  return function (dispatch) {
    fetch(URL + "/ingredients")
      .then((answer) => {
        if (answer.ok) {
          return answer.json();
        }
        return Promise.reject(`Ошибка ${answer.status}`);
      })
      .then((answer) => {
        console.log(answer);
        dispatch({
          type: INGREDIENTS_LIST,
          ingredients: answer.data,
        });
      })
      .catch(console.error);
  };
}
