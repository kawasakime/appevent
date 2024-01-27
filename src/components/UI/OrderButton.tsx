import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { OrderButtonProps } from "../../interfaces/props";
import { useAppDispatch } from "../../redux/hooks";
import { addItemToCart } from "../../redux/slices/cartSlice";

const OrderButton = ({ item }: OrderButtonProps) => {
  const [clicked, setClicked] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (clicked) {
      navigate("/cart");
    } else {
      dispatch(addItemToCart(item));
      setClicked(true);
    }
  };

  return (
    <button className={`catalog__card-order_button ${clicked ? "active" : ""}`} onClick={handleClick}>
      {!clicked ? "Добавить в корзину" : "Оформить заказ"}
    </button>
  );
};

export default OrderButton;
