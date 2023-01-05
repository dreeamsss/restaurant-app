import Container from "../UI/Container";
import CartButton from "../Cart/CartButton";
import classes from "./Header.module.scss";

function Header({ onShowCart }) {
  return (
    <div className={classes.header}>
      <Container>
        <div className={classes.headerInner}>
          <div className={classes.logo}>Sushi Restaurant</div>
          <CartButton onShowCart={onShowCart} />
        </div>
      </Container>
    </div>
  );
}

export default Header;
