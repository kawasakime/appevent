import { memo } from "react";
import { CatalogCardProps } from "../../interfaces/props";
import { convertPrice } from "../../utils/converters";
import OrderButton from "../UI/OrderButton";

const CatalogCard = memo(({ item }: CatalogCardProps) => {
  return (
    <article className="catalog__card">
      <img className="catalog__card-image" src={item.image} alt="" />
      <div className="catalog__card__info">
        <p className="catalog__card__info-name">{item.name}</p>
        <span className="catalog__card__info-price">{convertPrice(item.price)} ₽</span>
      </div>
      <OrderButton item={item} />
    </article>
  );
});

export default CatalogCard;
