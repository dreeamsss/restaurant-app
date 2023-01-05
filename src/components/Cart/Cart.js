import classes from "./Cart.module.scss";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Button from "../UI/Button";

function Cart({ onHideCart }) {
  const cartContext = useContext(CartContext);

  const cartIsVisible = cartContext.items.length || false;

  const addItemHandler = (item) => {
    cartContext.addItem({
      ...item,
      amount: 1,
    });
  };

  const removeItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  if (!cartIsVisible) {
    return (
      <Modal onHideModal={onHideCart}>
        <p className={classes.entity}>Корзина пуста</p>
      </Modal>
    );
  }

  const cartItems = (
    <ul className={classes.cartList}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
          onAddItem={addItemHandler.bind(null, item)}
          onRemoveItem={removeItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideModal={onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <div className={classes.totalContent}>
          <h3 className={classes.totalTitle}>Итого</h3>
          <span className={classes.totalPrice}>${cartContext.totalPrice}</span>
        </div>
        <div className={classes.actions}>
          <Button className={classes.closeBtn} onClick={onHideCart}>
            Закрыть
          </Button>
          <Button className={classes.orderBtn}>Заказать</Button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
