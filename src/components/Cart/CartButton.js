import Button from "../UI/Button";
import cart from "../../img/cart/cart.png";
import classes from "./CartButton.module.scss";
import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import clsx from "clsx";

function CartButton({ onShowCart }) {
  const cartContext = useContext(CartContext);
  const [isButtonAnimated, setIsButtonAnimated] = useState(false);

  useEffect(() => {
    if (cartContext.items.length === 0) return;

    setIsButtonAnimated(true);
    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartContext.items]);

  return (
    <React.Fragment>
      <Button
        className={clsx(classes.cartButton, {
          [classes.bump]: isButtonAnimated,
        })}
        onClick={onShowCart}
      >
        <img src={cart} alt="Корзина" className={classes.cartIcon} />
        <span className={classes.cartText}>Корзина</span>
        <span className={classes.cartCount}> {cartContext.items.length}</span>
      </Button>
    </React.Fragment>
  );
}

export default CartButton;
