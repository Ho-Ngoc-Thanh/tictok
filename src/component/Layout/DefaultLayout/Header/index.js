import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import image from "~/assets/images";
import { BsSearch } from "react-icons/bs";
import {
  AiOutlineCloseCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("logo-tictok")}>
          <img src={image.logo} alt="logo" />
        </div>
        <div className={cx("search")}>
          <input
            type="text"
            name="search"
            placeholder="Search video you want"
          />
          <button className={cx("clear-btn")}>
            <AiOutlineCloseCircle size={15} />
          </button>
          <button className={cx("loading-btn")}>
            <AiOutlineLoading3Quarters size={15} />
          </button>
          <button className={cx("search-btn")}>
            <BsSearch size={20} />
          </button>
        </div>
        <div className={cx("action")}>ac</div>
      </div>
    </header>
  );
}

export default Header;
