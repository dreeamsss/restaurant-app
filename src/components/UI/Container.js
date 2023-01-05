import classes from "./Container.module.scss";
import clsx from "clsx";

function Container({ children, className, ...props }) {
  return (
    <div className={clsx(classes.container, className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
