import { NavLink } from "react-router-dom";
import "./style.scss";
import sportseeLogo from "../../assets/images/sportsee-logo.png";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={sportseeLogo} alt="sportsee logo" />
      <ul className="header__navigation">
        <li className="header__navigation-item">
          <NavLink className="header__navigation-item-navlink" to="/">
            Accueil
          </NavLink>
        </li>
        <li className="header__navigation-item">
          <NavLink className="header__navigation-item-navlink" to="/profile">
            Profil
          </NavLink>
        </li>
        <li className="header__navigation-item">
          <NavLink className="header__navigation-item-navlink" to="/settings">
            Réglages
          </NavLink>
        </li>
        <li className="header__navigation-item">
          <NavLink className="header__navigation-item-navlink" to="/community">
            Communauté
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
