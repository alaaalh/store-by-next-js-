import { Fragment } from "react";
import Image from "next/image";

import mainImage from "../../assets/bookStore.jpg";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Book Store</h1>
        <HeaderButton>{props.children}</HeaderButton>
      </header>
      <div className={classes["main-image"]}>
      <div>
        <Image
          src={mainImage}
          alt="a girl write in book"
          layout="fill"
        />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
