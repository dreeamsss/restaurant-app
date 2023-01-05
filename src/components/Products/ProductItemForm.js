import Button from "../UI/Button";
import Input from "../UI/Input";
import React, { useRef, useState } from "react";
import classes from "./ProductItemForm.module.scss";

function ProductItemForm({ onAddToCart }) {
  const [isAmountValid, setIsAmountValid] = useState(false);
  const productAmountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const inputAmount = productAmountRef.current.value;

    if (inputAmount.trim().length || +inputAmount > 0 || +inputAmount < 11) {
      setIsAmountValid(true);
      onAddToCart(+inputAmount);
      return;
    }

    setIsAmountValid(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={productAmountRef}
        className={classes.input}
        input={{
          id: "item-count",
          type: "number",
          min: 1,
          step: 1,
          defaultValue: 1,
        }}
        label="Количество"
      />
      <Button>Добавить</Button>
    </form>
  );
}

export default ProductItemForm;
