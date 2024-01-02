import {
  SideNavigationBarNav,
  SideNavigationBarUnorderedList,
  SideNavigationBarList,
  SideNavigationBarParagraph,
} from "./style";
import yogaIcon from "../../assets/icons/yoga-icon.png";
import swimmingIcon from "../../assets/icons/swimming-icon.png";
import cyclismIcon from "../../assets/icons/cyclism-icon.png";
import bodybuildingIcon from "../../assets/icons/bodybuilding-icon.png";

function SideNavigationBar() {
  return (
    <SideNavigationBarNav>
      <SideNavigationBarUnorderedList>
        <SideNavigationBarList>
          <img src={yogaIcon} alt="yoga icon" />
        </SideNavigationBarList>
        <SideNavigationBarList>
          <img src={swimmingIcon} alt="swimming icon" />
        </SideNavigationBarList>
        <SideNavigationBarList>
          <img src={cyclismIcon} alt="cyclism icon" />
        </SideNavigationBarList>
        <SideNavigationBarList>
          <img src={bodybuildingIcon} alt="bodybuilding icon" />
        </SideNavigationBarList>
      </SideNavigationBarUnorderedList>
      <SideNavigationBarParagraph>
        Copyright, SportSee 2020
      </SideNavigationBarParagraph>
    </SideNavigationBarNav>
  );
}

export default SideNavigationBar;
