import ShoppingCart from "../../assets/shopping-cart.png"
import classes from "./HeaderButton.module.css";
import Image from 'next/image'

const HeaderButton = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <Image src={ShoppingCart} alt="this is shopping cart"/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderButton;
