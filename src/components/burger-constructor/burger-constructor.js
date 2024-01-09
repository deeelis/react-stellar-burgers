import { useState } from "react";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import constructorStyles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

const Ingredients = [
  {
    text: "Соус традиционный галактический",
    price: 30,
    image: "https://code.s3.yandex.net/react/code/sauce-03.png",
  },
  {
    text: "Мясо бессмертных моллюсков Protostomia",
    price: 300,
    image: "https://code.s3.yandex.net/react/code/meat-02.png",
  },
  {
    text: "Плоды Фалленианского дерева",
    price: 80,
    image: "https://code.s3.yandex.net/react/code/sp_1.png",
  },
  {
    text: "Хрустящие минеральные кольца",
    price: 80,
    image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
  },
  {
    text: "Хрустящие минеральные кольца",
    price: 80,
    image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
  },
];

function BurgerConstructor() {
  const [openModal, setOpenModal] = useState(false);

  const SumPrice = () => {
    let ans = 0;
    Ingredients.forEach((Ingredient) => {
      ans += Ingredient.price;
    });
    return ans;
  };

  return (
    <section className={`${constructorStyles.card} mt-25 ml-4`}>
      <div className={`${constructorStyles.order} mb-10 pr-4`}>
        <div className={constructorStyles.piece}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={20}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
            extraClass="ml-8"
          />
        </div>
        {Ingredients.map((item, index) => (
          <div key={index} className={constructorStyles.piece}>
            <DragIcon type={"primary"} />
            <ConstructorElement
              text={item.text}
              price={item.price}
              thumbnail={item.image}
              extraClass="ml-8"
            />
          </div>
        ))}
        <div className={constructorStyles.piece}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={20}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
            extraClass="ml-8"
          />
        </div>
      </div>
      <div className={constructorStyles.sum}>
        <div className={constructorStyles.price}>
          <p className="text text_type_main-medium mr-2">{SumPrice() + 40}</p>
          <CurrencyIcon type={"primary"} />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => setOpenModal(true)}
        >
          Оформить заказ
        </Button>
      </div>
      {openModal && (
        <Modal closeModal={() => setOpenModal(false)}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
