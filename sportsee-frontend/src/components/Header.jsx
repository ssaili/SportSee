import { NavLink } from "react-router-dom";
import styled from "styled-components";
import sportseeLogo from "../assets/images/sportsee-logo.png";

const HeaderTag = styled.header`
  display: flex;
  background-color: #020203;
`;

const HeaderImage = styled.img`
  height: 61px;
  margin: 18px 28px;
`;

const HeaderUnorderedList = styled.ul`
  width: 100%;
  margin-inline: 101px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderList = styled.li`
  list-style-type: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 24px;
`;

const HeaderNavLink = styled(NavLink)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &:hover {
    color: #ff0101;
  }

  &.active {
    text-decoration: underline;
`;

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
