import classes from "./CartItem.module.scss";

function CartItem({ title, price, amount, onAddItem, onRemoveItem }) {
  return (
    <li className={classes.item}>
      <div className="content">
        <h2 className={classes.subtitle}>{title}</h2>
        <div className={classes.info}>
          <span className={classes.price}>${price}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>

      <div className="actions">
        <button className={classes.actionBtn} onClick={onAddItem}>
          +
        </button>
        <button className={classes.actionBtn} onClick={onRemoveItem}>
          -
        </button>
      </div>
    </li>
  );
}

export default CartItem;
