import classNames from "classnames/bind";
import styles from "./Group2.module.scss";
import { cssIcon } from "../../../assets/importIamge";

const cx = classNames.bind(styles);

export default function Group2() {
  return (
    <div className={cx("container")}>
      <h2>Lorem ipsum dolor sit amet</h2>
      <div className={cx("content")}>
        <div className={cx("content-header")}>
          <div className={cx("content-image")}>
            <img src={cssIcon} />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at{" "}
          </p>
        </div>
        <p>
          ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
          ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </p>
      </div>
    </div>
  );
}
