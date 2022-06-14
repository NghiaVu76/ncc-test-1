import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("container")}>
      <div className={cx("copyright")}>Copyright © 2021</div>
    </div>
  );
}

export default Footer;
