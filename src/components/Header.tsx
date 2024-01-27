import { Link } from "react-router-dom";
import CartButton from "./UI/CartButton";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            <li className="header__navigation__item">
              <Link to={"/"}>Каталог</Link>
            </li>
            <li className="header__navigation__item">
              <CartButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
