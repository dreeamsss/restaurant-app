import ProductItemForm from "./ProductItemForm";
import classes from "./ProductItem.module.scss";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

function ProductItem({ id, title, description, price }) {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id,
      title,
      description,
      amount,
      price: +price.toFixed(2),
    });
  };

  return (
    <li className={classes.item}>
      <div className={classes.itemInner}>
        <h2 className={classes.subtitle}>{title}</h2>
        <p className={classes.descr}>{description}</p>
        <span className={classes.price}>${price}</span>
      </div>
      <div className={classes.actions}>
        <ProductItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default ProductItem;
