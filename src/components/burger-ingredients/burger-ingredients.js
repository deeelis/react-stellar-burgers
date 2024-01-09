import React, { useEffect, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsStyle from "./burger-ingredients.module.css";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { URL } from "../../utils/const";

function BurgerIngredients() {
  function getItems() {
    return fetch(URL)
      .then((data) => {
        if (data.ok) {
          return data.json();
        }
      })
      .catch(console.error);
  }
  
  const [current, setCurrent] = React.useState("one");
  const [currentItem, setCurrentItem] = useState(null);
  const [buns, setBuns] = useState(null);
  const [sauces, setSauces] = useState(null);
  const [mains, setMains] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((data) => setItems(data.data));
  }, []);

  useEffect(() => {
    setBuns(items.filter((item) => item.type === "bun"));
    setSauces(items.filter((item) => item.type === "sauce"));
    setMains(items.filter((item) => item.type === "main"));
  }, [items]);

  return (
    <section className={`${ingredientsStyle.container} mt-10`}>
      <div className={ingredientsStyle.menu}>
        <p className="text text_type_main-large mb-5">Соберите бургер</p>
        <nav className={ingredientsStyle.nav}>
          <Tab value="one" active={current === "one"} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === "two"} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === "three"} onClick={setCurrent}>
            Начинки
          </Tab>
        </nav>
      </div>
      <section className={ingredientsStyle.ingredients}>
        <div>
          <p className="text text_type_main-medium mb-6">Булки</p>
          <section className={`${ingredientsStyle.ingredients__list} ml-4`}>
            {buns && buns.map((bun) => (
              <BurgerIngredient
                onClick={() => setCurrentItem(bun)}
                key={bun._id}
                name={bun.name}
                image={bun.image}
                price={bun.price}
              />
            ))}
          </section>
        </div>
        <div>
          <p className="text text_type_main-medium mt-10 mb-6">Соусы</p>
          <section className={`${ingredientsStyle.ingredients__list} ml-4`}>
            {sauces && sauces.map((sauce) => (
              <BurgerIngredient
                onClick={() => setCurrentItem(sauce)}
                key={sauce._id}
                name={sauce.name}
                image={sauce.image}
                price={sauce.price}
              />
            ))}
          </section>
        </div>
        <div>
          <p className="text text_type_main-medium mt-10 mb-6">Начинки</p>
          <section className={`${ingredientsStyle.ingredients__list} ml-4`}>
            {mains && mains.map((main) => (
              <BurgerIngredient
                onClick={() => setCurrentItem(main)}
                key={main._id}
                name={main.name}
                image={main.image}
                price={main.price}
              />
            ))}
          </section>
        </div>
      </section>
      {currentItem && (
        <Modal closeModal={() => setCurrentItem(false)}>
          <IngredientDetails
            name={currentItem.name}
            image={currentItem.image}
            calories={currentItem.calories}
            proteins={currentItem.proteins}
            fat={currentItem.fat}
            carbohydrates={currentItem.carbohydrates}
          />
        </Modal>
      )}
    </section>
  );
}

export default BurgerIngredients;
