import ingredientDetailsStyle from "./ingredient-details.module.css";
import PropTypes from "prop-types";

function IngredientDetails({
  name,
  image,
  calories,
  carbohydrates,
  fat,
  proteins,
}) {
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
        src={image}
        alt={name}
      />

      <p className="mb-8 text text_type_main-medium">{name}</p>
      <div className={ingredientDetailsStyle.description}>
        <div className={`${ingredientDetailsStyle.detail} ml-5 mr-5`}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Калории, ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {calories}
          </p>
        </div>
        <div className={`${ingredientDetailsStyle.detail} ml-5 mr-5`}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {proteins}
          </p>
        </div>
        <div className={`${ingredientDetailsStyle.detail} ml-5 mr-5`}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {fat}
          </p>
        </div>
        <div className={`${ingredientDetailsStyle.detail} ml-5 mr-5`}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {carbohydrates}
          </p>
        </div>
      </div>
    </section>
  );
}

IngredientDetails.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  calories: PropTypes.number,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
};

export default IngredientDetails;
