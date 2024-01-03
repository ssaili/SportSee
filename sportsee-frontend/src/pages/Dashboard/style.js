import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 117px;
  height: calc(100vh - 97px);
  padding-inline: 5%;
  padding-block: 2%;
`;

const DashboardUserFirstNameContainer = styled.p`
  font-weight: 500;
  font-size: 48px;

  @media (min-width: 2560px) {
    font-size: 72px;
  }
`;

const DashboardUserFirstName = styled.span`
  color: #ff0101;
`;

const DashboardUserGoal = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-block: 20px;

  @media (min-width: 2560px) {
    font-size: 30px;
  }
`;

const DashboardDataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1439px) {
    flex-direction: column;
  }
`;

const DashboardGraphicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 74%;

  @media (max-width: 1439px) {
    width: 100%;
    height: 80%;
    order: 2;
  }
`;

const DashboardLowerGraphicsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 42%;

  @media (max-width: 1439px) {
    height: 44%;
  }
`;

const DashboardMacronutrientsContainer = styled.div`
  width: 22.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1439px) {
    width: 100%;
    height: 20%;
    order: 1;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export {
  DashboardContainer,
  DashboardUserFirstNameContainer,
  DashboardUserFirstName,
  DashboardUserGoal,
  DashboardDataContainer,
  DashboardGraphicsContainer,
  DashboardLowerGraphicsContainer,
  DashboardMacronutrientsContainer,
};
