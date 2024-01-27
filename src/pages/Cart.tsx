import { useAppSelector } from "../redux/hooks";

const Cart = () => {
  const { products } = useAppSelector((state) => state.cart);

  return (
    <div className="page wrapper">
      <div className="page__header">
        <h2>Корзина</h2>
      </div>
      {products.length > 0 ? <div></div> : <div>Корзина пуста</div>}
    </div>
  );
};

export default Cart;
