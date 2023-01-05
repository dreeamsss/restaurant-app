import classes from "./Input.module.scss";
import React from "react";
import clsx from "clsx";

const Input = React.forwardRef(({ className, input, label }, ref) => {
  return (
    <div className={clsx(classes.input, className)}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </div>
  );
});

export default Input;
