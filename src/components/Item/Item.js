import classNames from "classnames/bind";
import styles from "./Item.module.scss";

const cx = classNames.bind(styles);

export default function Item({ children }) {
  return (
    <div className={cx("container")}>
      <button className={cx("button")}>{children}</button>
    </div>
  );
}
