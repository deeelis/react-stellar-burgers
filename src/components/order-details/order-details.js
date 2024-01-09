import orderDetailsStyle from "./order-details.module.css";
import doneIcon from "./../../images/doneIcon.svg";

function OrderDetails() {
  return (
    <section className={`${orderDetailsStyle.details} mb-30 mt-30`}>
      <div className="mb-15">
        <p
          className={`${orderDetailsStyle.number} text text_type_digits-large mb-8`}
        >
          034536
        </p>
        <p className="text text_type_main-medium">идентификатор заказа</p>
      </div>
      <img className={orderDetailsStyle.image} src={doneIcon} alt={"Done"} />
      <div className="mt-15">
        <p className="text text_type_main-default mb-2">
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </section>
  );
}

export default OrderDetails;
