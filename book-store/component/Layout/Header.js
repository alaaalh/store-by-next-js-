import { Fragment } from "react";
import Image from "next/image";

import mainImage from "../../assets/bookStore.jpg";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  console.log(props.children);
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Book Store</h1>
        <HeaderButton>{props.children}</HeaderButton>
      </header>
      <div className={classes["main-image"]}>
        <Image
          src={mainImage}
          alt="a girl write in book"
          width="110%"
          height="35%"
          layout="responsive"
        />
      </div>
    </Fragment>
  );
};

export default Header;
