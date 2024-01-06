import "./style.scss";
import yogaIcon from "../../assets/icons/yoga-icon.png";
import swimmingIcon from "../../assets/icons/swimming-icon.png";
import cyclismIcon from "../../assets/icons/cyclism-icon.png";
import bodybuildingIcon from "../../assets/icons/bodybuilding-icon.png";

function SideNavigationBar() {
  return (
    <nav className="side-navigation-bar">
      <ul className="side-navigation-bar__list">
        <li className="side-navigation-bar__item">
          <img src={yogaIcon} alt="yoga icon" />
        </li>
        <li className="side-navigation-bar__item">
          <img src={swimmingIcon} alt="swimming icon" />
        </li>
        <li className="side-navigation-bar__item">
          <img src={cyclismIcon} alt="cyclism icon" />
        </li>
        <li className="side-navigation-bar__item">
          <img src={bodybuildingIcon} alt="bodybuilding icon" />
        </li>
      </ul>
      <p className="side-navigation-bar__copyright">Copyright, SportSee 2020</p>
    </nav>
  );
}

export default SideNavigationBar;
