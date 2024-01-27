import { memo } from "react";
import { CartItemProps } from "../interfaces/props";
import { useAppDispatch } from "../redux/hooks";
import { removeItemFromCart } from "../redux/slices/cartSlice";
import { convertPrice } from "../utils/converters";

const CartItem = memo(({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(item.id));
  };

  return (
    <div className="cart__item">
      <div className="cart__item-left_container">
        <img className="cart__item-image" src={item.image} alt="" />
        <p className="cart__item-name">{item.name}</p>
      </div>
      <div className="cart__item-right_container">
        <p className="cart__item-count">
          {item.count} шт. x {convertPrice(item.price)} ₽
        </p>
        <span className="cart__item-price">{convertPrice(item.price * item.count)} ₽</span>
        <button onClick={handleRemoveItem} className="cart__item-button">
          Удалить
        </button>
      </div>
    </div>
  );
});

export default CartItem;
