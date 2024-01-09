import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerIngredientStyle from "./burger-ingredient.module.css";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

function BurgerIngredient({ type, _id, onClick, name, image, price }) {
  const counts = useSelector((state) => {
    return state.burgerConstructor.order_ingredients.counts[_id];
  });

  const [{ isDragging }, dragRef] = useDrag({
    type: "ingredient",
    item: { type, name, image, price, _id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <section
      ref={dragRef}
      className={burgerIngredientStyle.ingredient}
      onClick={onClick}
    >
      {counts !== 0 && counts && (
        <div className={burgerIngredientStyle.counter}>
          <Counter count={counts} size={"default"} extraClass="m-1" />
        </div>
      )}
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
      {isDragging}
    </section>
  );
}

BurgerIngredient.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
  _id: PropTypes.string,
};

export default BurgerIngredient;
