import classNames from "classnames/bind";
import Item from "../Item/Item";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <div className={cx("container")}>
      <div className={cx("list-items")}>
        <Item>Home</Item>
        <Item>Services</Item>
        <Item>News</Item>
        <Item>Blog</Item>
        <Item>Contact</Item>
      </div>
    </div>
  );
}
