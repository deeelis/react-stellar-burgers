import { useCallback, useState } from "react";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import constructorStyle from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { CURRENT_ITEM, MOVE_INGREDIENT, ORDER } from "../../services/actions";
import { postOrder } from "../../services/actions/post-order";
import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";
import { v4 } from "uuid";

function BurgerConstructor() {
  const order = useSelector((state) => {
    return state.order_ingredients;
  });

  const dispatch = useDispatch();
  const makeOrder = () => {
    dispatch(postOrder(order.ingredients, order.buns));
    setOpenModal(true);
  };

  const moveItem = useCallback(
    (dragIdx, idx) => {
      dispatch({
        type: MOVE_INGREDIENT,
        toIndex: idx,
        fromIndex: dragIdx,
      });
    },
    [dispatch]
  );

  const [{ isOver }, dropRef] = useDrop({
    accept: "ingredient",
    drop: (item) => {
      item.index = v4();
      dispatch({
        type: ORDER,
        sum:
          order.sum +
          (item.type === "bun"
            ? 2 * item.price -
              (Object.keys(order.buns).length !== 0 ? 2 * order.buns.price : 0)
            : item.price),
        buns: item.type === "bun" ? item : order.buns,
        order_ingredients:
          item.type === "bun"
            ? [...order.ingredients]
            : [...order.ingredients, item],
        item: item,
      });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const [openModal, setOpenModal] = useState(false);

  const closeModal = () => {
    dispatch({
      type: CURRENT_ITEM,
      current_item: {},
    });
    setOpenModal(false);
  };

  return (
    <section className={`${constructorStyle.card} mt-25 ml-4`}>
      <div ref={dropRef} className={`${constructorStyle.order} mb-10 pr-4`}>
        <div className={constructorStyle.piece}>
          {Object.keys(order.buns).length !== 0 && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={order.buns.name + " верх"}
              price={order.buns.price}
              thumbnail={order.buns.image}
            />
          )}
        </div>
        <div className={constructorStyle.main}>
          {order.ingredients.map((item, index) => (
            <BurgerConstructorItem
              moveItem={moveItem}
              key={item.index}
              item={item}
              index={index}
            />
          ))}
        </div>

        <div className={constructorStyle.piece}>
          {Object.keys(order.buns).length !== 0 && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={order.buns.name + " низ"}
              price={order.buns.price}
              thumbnail={order.buns.image}
            />
          )}
        </div>
        {isOver}
      </div>
      <div className={constructorStyle.sum}>
        <div className={constructorStyle.price}>
          <p className="text text_type_main-medium mr-2">{order.sum}</p>
          <CurrencyIcon type={"primary"} />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={makeOrder}
        >
          Оформить заказ
        </Button>
      </div>
      {openModal && (
        <Modal closeModal={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
