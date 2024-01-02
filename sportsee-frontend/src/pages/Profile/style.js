import { Link } from "react-router-dom";
import styled from "styled-components";

const ProfileLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 117px;
  height: calc(100vh - 97px);
`;

const ProfileLinkDiv = styled.div`
  display: flex;
  gap: 100px;
  text-align: center;
  margin: auto;
`;

const ProfileLink = styled(Link)`
  text-decoration: none;
  padding: 6px;
  background-color: #ffffff;
  color: #020203;
  font-weight: 500;
  font-size: 24px;
  border-radius: 6px;
  border: 2px solid #020203;

  &:hover {
    background-color: #020203;
    color: #ffffff;
  }
`;

export { ProfileLinkContainer, ProfileLinkDiv, ProfileLink };
