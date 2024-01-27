import { useMemo } from "react";
import CartItem from "../components/CartItem";
import { useAppSelector } from "../redux/hooks";
import { calcTotalPrice } from "../utils/cart";
import { convertPrice } from "../utils/converters";

const Cart = () => {
  const { products } = useAppSelector((state) => state.cart);

  const totalPrice = useMemo(() => {
    return convertPrice(calcTotalPrice(products));
  }, [products]);

  return (
    <div className="page wrapper">
      <div className="page__header">
        <h2>Корзина</h2>
      </div>
      <section className="cart">
        {products.length > 0 ? (
          products.map((product) => <CartItem key={product.id} item={product} />)
        ) : (
          <div className="cart__empty">
            <p>Корзина пуста</p>
          </div>
        )}
        {products.length > 0 && (
          <div className="cart__total_price">
            <p>Итого:</p>
            <p>{totalPrice} ₽</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Cart;
