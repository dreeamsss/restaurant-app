import { useState } from "react";
import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";
import CartContextProvider from "./store/CartContextProvider";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };

  return (
    <CartContextProvider>
      <div className="App">
        <Header onShowCart={showCartHandler} />
        <Main />
      </div>

      {cartIsShow && <Cart onHideCart={hideCartHandler} />}
    </CartContextProvider>
  );
}

export default App;
