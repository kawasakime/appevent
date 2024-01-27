import { Link } from "react-router-dom";
import CartIcon from "../../assets/icons/cart.svg?react";

const CartButton = () => {
  return (
    <Link className="cart_button" to={"/cart"}>
      <div className="cart_button-label">{2}</div>
      <CartIcon className="cart_button-icon" height={30} width={30} />
    </Link>
  );
};

export default CartButton;
