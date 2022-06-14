import classNames from "classnames/bind";
import styles from "./Content.module.scss";
import Group1 from "./Group1/Group1";
import { logo } from "../../../src/assets/importIamge";
import Group2 from "./Group2/Group2";
import Footer from "../Footer/Footer";

const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("container")}>
      <div className={cx("ncc-logo")}>
        <img src={logo} />
      </div>
      <div className={cx("big-group")}>
        <Group1 />
      </div>
      <div className={cx("small-group")}>
        <Group2 />
        <Group2 />
        <Group2 />
      </div>
      <div className={cx("footer")}>
        <Footer />
      </div>
    </div>
  );
}

export default Content;
