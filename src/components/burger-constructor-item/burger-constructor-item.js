import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { DELETE_ITEM } from "../../services/actions";
import { useDispatch, useSelector } from "react-redux";
import burgerConstructorItemStyle from "./burger-constructor-item.module.css";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import PropTypes from "prop-types";

function BurgerConstructorItem({ item, index, moveItem }) {
  const order = useSelector((state) => {
    return state.burgerConstructor.order_ingredients;
  });
  const dispatch = useDispatch();
  const ref = useRef(null);
  const id = item._id;

  const [, drop] = useDrop({
    accept: "move_ingredient",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) return;
      const hoverRect = ref.current?.getBoundingClientRect();
      const hoverMidY = (hoverRect.bottom - hoverRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMidY) return;
      if (dragIndex > hoverIndex && hoverClientY > hoverMidY) return;
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "move_ingredient",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  drag(drop(ref));

  return (
    <div ref={ref} className={burgerConstructorItemStyle.element}>
      <DragIcon type={"primary"} />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image}
        handleClose={() => {
          dispatch({
            type: DELETE_ITEM,
            index: item.index,
            sum: order.sum - item.price,
            item: item,
          });
        }}
      />
      {isDragging}
    </div>
  );
}

BurgerConstructorItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string,
    _id: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    calories: PropTypes.number,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
  }),
  index: PropTypes.number,
  moveItem: PropTypes.func,
};

export default BurgerConstructorItem;
