import ingredientDetailsStyle from "./ingredient-details.module.css";
import { useSelector } from "react-redux";

function IngredientDetails() {
  const currentItem = useSelector((state) => {
    return state.ingredientsDetailModal.current_item;
  });
  return (
    <section
      className={`${ingredientDetailsStyle.details} ml-10 mr-10 mt-10 mb-15`}
    >
      <p
        className={`${ingredientDetailsStyle.header} text text_type_main-large mt-2 mb-2`}
      >
        Детали ингредиента
      </p>
      <img
        className={`${ingredientDetailsStyle.image} mb-4"`}
        src={currentItem.image}
        alt={currentItem.name}
      />

      <p className="mb-8 text text_type_main-medium">{currentItem.name}</p>
      <div className={ingredientDetailsStyle.description}>
        <div className={`${ingredientDetailsStyle.detail} ml-5 mr-5`}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Калории, ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {currentItem.calories}
          </p>
        </div>
        <div className={`${ingredientDetailsStyle.detail} ml-5 mr-5`}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {currentItem.proteins}
          </p>
        </div>
        <div className={`${ingredientDetailsStyle.detail} ml-5 mr-5`}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {currentItem.fat}
          </p>
        </div>
        <div className={`${ingredientDetailsStyle.detail} ml-5 mr-5`}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {currentItem.carbohydrates}
          </p>
        </div>
      </div>
    </section>
  );
}

export default IngredientDetails;
