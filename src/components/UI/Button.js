import classes from "./Button.module.scss";
import clsx from "clsx";

function Button({ children, className, ...props }) {
  return (
    <button className={clsx(classes.button, className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
