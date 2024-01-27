import { Link } from "react-router-dom";
import CartIcon from "../../assets/icons/cart.svg?react";
import { useAppSelector } from "../../redux/hooks";

const CartButton = () => {
  const { count } = useAppSelector((state) => state.cart);

  return (
    <Link className="cart_button" to={"/cart"}>
      {count > 0 && <div className="cart_button-label">{count}</div>}

      <CartIcon className="cart_button-icon" height={30} width={30} />
    </Link>
  );
};

export default CartButton;
