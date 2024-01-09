import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientStyle from "./burger-ingredient.module.css";
import PropTypes from "prop-types";

function BurgerIngredient({ onClick, name, image, price }) {
  return (
    <section className={burgerIngredientStyle.ingredient} onClick={onClick}>
      <div className={burgerIngredientStyle.counter}>
        <Counter count={1} size={"default"} extraClass="m-1" />
      </div>
      <img
        className={`${burgerIngredientStyle.image} mb-1`}
        src={image}
        alt={name}
      />
      <div className={`${burgerIngredientStyle.price} mb-1`}>
        <p className="text text_type_main-default mr-2">{price}</p>
        <CurrencyIcon type={"primary"} />
      </div>
      <p className="text text_type_main-default">{name}</p>
    </section>
  );
}

BurgerIngredient.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

export default BurgerIngredient;
