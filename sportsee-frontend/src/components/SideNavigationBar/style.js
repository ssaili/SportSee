import styled from "styled-components";

const SideNavigationBarNav = styled.nav`
  height: 100%;
  width: 117px;
  position: fixed;
  background-color: #020203;
  z-index: -1;
  top: 0;
  left: 0;
  text-align: center;
`;

const SideNavigationBarUnorderedList = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SideNavigationBarList = styled.li`
  background-color: #ffffff;
  border-radius: 6px;
  margin-bottom: 20px;
  padding: 14px;
`;

const SideNavigationBarParagraph = styled.p`
  white-space: nowrap;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  position: absolute;
  top: 85%;
  transform: rotate(-90deg) translateY(-85%);
`;

export {
  SideNavigationBarNav,
  SideNavigationBarUnorderedList,
  SideNavigationBarList,
  SideNavigationBarParagraph,
};
