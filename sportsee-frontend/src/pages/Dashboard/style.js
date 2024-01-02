import styled from "styled-components";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 117px;
  height: calc(100vh - 97px);
  padding-inline: 5%;
  padding-block: 2%;
`;

const DashboardUserFirstName = styled.p`
  font-weight: 500;
  font-size: 48px;
`;
const DashboardUserGoal = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-block: 20px;
`;

const DashboardDataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const DashboardGraphicsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 74%;
`;

const DashboardLowerGraphicsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 42%;
`;

const DashboardMacronutrientsContainer = styled.div`
  width: 22.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export {
  DashboardContainer,
  DashboardUserFirstName,
  DashboardUserGoal,
  DashboardDataContainer,
  DashboardGraphicsContainer,
  DashboardLowerGraphicsContainer,
  DashboardMacronutrientsContainer,
};
