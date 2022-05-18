import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
const cx = classNames.bind(styles);
function SideBar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div>
          <h1>sss</h1>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
