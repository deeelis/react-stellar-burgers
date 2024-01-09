import React from "react";
import { useRef, useEffect, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientsStyle from "./burger-ingredients.module.css";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useDispatch, useSelector } from "react-redux";
import { CURRENT_ITEM } from "../../services/actions";
import { getIngredients } from "../../services/actions/burger-ingredients";

function BurgerIngredients() {
  const [openModal, setOpenModal] = useState(null);
  const [buns, setBuns] = useState(null);
  const [sauces, setSauces] = useState(null);
  const [mains, setMains] = useState(null);

  const currentItem = useDispatch();

  let items = useSelector((state) => {
    return state.ingredients.ingredients;
  });

  const [current, setCurrent] = useState("one");
  const ingredientsRef = useRef(null);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);
  const handleScroll = () => {
    const bunDistance = Math.abs(
      ingredientsRef.current.getBoundingClientRect().top -
        bunRef.current.getBoundingClientRect().top
    );
    const sauceDistance = Math.abs(
      ingredientsRef.current.getBoundingClientRect().top -
        sauceRef.current.getBoundingClientRect().top
    );
    const mainDistance = Math.abs(
      ingredientsRef.current.getBoundingClientRect().top -
        mainRef.current.getBoundingClientRect().top
    );
    const minDistance = Math.min(bunDistance, sauceDistance, mainDistance);
    const currentHeader =
      minDistance === bunDistance
        ? "one"
        : minDistance === sauceDistance
        ? "two"
        : "three";
    setCurrent((prevState) =>
      currentHeader === prevState.current ? prevState.current : currentHeader
    );
  };

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
      <section
        ref={ingredientsRef}
        onScroll={handleScroll}
        className={ingredientsStyle.ingredients}
      >
        <div id="bun">
          <p ref={bunRef} className="text text_type_main-medium mb-6">
            Булки
          </p>
          <section className={`${ingredientsStyle.ingredients__list} ml-4`}>
            {buns &&
              buns.map((bun) => (
                <BurgerIngredient
                  onClick={() => {
                    currentItem({
                      type: CURRENT_ITEM,
                      current_item: bun,
                    });
                    setOpenModal(true);
                  }}
                  key={bun._id}
                  type={bun.type}
                  _id={bun._id}
                  name={bun.name}
                  image={bun.image}
                  price={bun.price}
                />
              ))}
          </section>
        </div>
        <div id="sauce">
          <p ref={sauceRef} className="text text_type_main-medium mt-10 mb-6">
            Соусы
          </p>
          <section className={`${ingredientsStyle.ingredients__list} ml-4`}>
            {sauces &&
              sauces.map((sauce) => (
                <BurgerIngredient
                  onClick={() => {
                    currentItem({
                      type: CURRENT_ITEM,
                      current_item: sauce,
                    });
                    setOpenModal(true);
                  }}
                  key={sauce._id}
                  type={sauce.type}
                  _id={sauce._id}
                  name={sauce.name}
                  image={sauce.image}
                  price={sauce.price}
                />
              ))}
          </section>
        </div>
        <div id="main">
          <p ref={mainRef} className="text text_type_main-medium mt-10 mb-6">
            Начинки
          </p>
          <section className={`${ingredientsStyle.ingredients__list} ml-4`}>
            {mains &&
              mains.map((main) => (
                <BurgerIngredient
                  onClick={() => {
                    currentItem({
                      type: CURRENT_ITEM,
                      current_item: main,
                    });
                    setOpenModal(true);
                  }}
                  key={main._id}
                  type={main.type}
                  _id={main._id}
                  name={main.name}
                  image={main.image}
                  price={main.price}
                />
              ))}
          </section>
        </div>
      </section>
      {openModal && (
        <Modal
          closeModal={() => {
            setOpenModal(false);
          }}
        >
          <IngredientDetails />
        </Modal>
      )}
    </section>
  );
}

export default BurgerIngredients;
