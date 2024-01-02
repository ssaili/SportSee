import {
  HeaderTag,
  HeaderImage,
  HeaderUnorderedList,
  HeaderList,
  HeaderNavLink,
} from "./style";
import sportseeLogo from "../../assets/images/sportsee-logo.png";

function Header() {
  return (
    <HeaderTag>
      <HeaderImage src={sportseeLogo} alt="sportsee logo" />
      <HeaderUnorderedList>
        <HeaderList>
          <HeaderNavLink to="/">Accueil</HeaderNavLink>
        </HeaderList>
        <HeaderList>
          <HeaderNavLink to="/profile">Profil</HeaderNavLink>
        </HeaderList>
        <HeaderList>
          <HeaderNavLink to="/settings">Réglages</HeaderNavLink>
        </HeaderList>
        <HeaderList>
          <HeaderNavLink to="/community">Communauté</HeaderNavLink>
        </HeaderList>
      </HeaderUnorderedList>
    </HeaderTag>
  );
}

export default Header;
