import { useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import SideNavigationBar from "../../components/SideNavigationBar";
import USER_MAIN_DATA from "../../data/mockUserMainData";
import USER_ACTIVITY from "../../data/mockUserActivity";
import USER_AVERAGE_SESSIONS from "../../data/mockUserAverageSessions";
import USER_PERFORMANCE from "../../data/mockUserPerformance";
import MacronutrientCard from "../../components/MacronutrientCard";
import calorieIcon from "../../assets/icons/calorie-icon.png";
import proteinIcon from "../../assets/icons/protein-icon.png";
import carbohydrateIcon from "../../assets/icons/carbohydrate-icon.png";
import lipidIcon from "../../assets/icons/lipid-icon.png";
import ChartCard from "../../components/ChartCard";

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 117px;
  height: calc(100vh - 97px);
  padding-inline: 6%;
  padding-block: 4%;
`;

const DashboardUserFirstName = styled.p`
  font-weight: 500;
  font-size: 48px;
`;
const DashboardUserGoal = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-top: 20px;
`;

const DashboardGraphicsContainer = styled.div`
  height: 100%;
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
`;

function Dashboard() {
  const { profileIndex } = useParams();

  const profileIndexMainData = USER_MAIN_DATA.filter(
    (user) => user.id === parseInt(profileIndex),
  );

  const profileIndexActivity = USER_ACTIVITY.filter(
    (user) => user.userId === parseInt(profileIndex),
  );

  const profileIndexAverageSessions = USER_AVERAGE_SESSIONS.filter(
    (user) => user.userId === parseInt(profileIndex),
  );

  const profileIndexPerformance = USER_PERFORMANCE.filter(
    (user) => user.userId === parseInt(profileIndex),
  );

  return (
    <>
      <Header />
      <SideNavigationBar />
      <DashboardContainer>
        <DashboardUserFirstName>
          Bonjour{" "}
          <span style={{ color: "#FF0101" }}>
            {profileIndexMainData[0].userInfos.firstName}
          </span>
        </DashboardUserFirstName>
        <DashboardUserGoal>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </DashboardUserGoal>
        <DashboardGraphicsContainer>
          <ChartCard
            chartCardContainerBackgroundColor="#FBFBFB"
            chartCardContainerColumn="1 / 4"
            chartCardContainerRow="1 / 3"
          ></ChartCard>
          <MacronutrientCard
            macronutrientCardBackgroundColor="rgba(255, 0, 0, 0.07)"
            macronutrientCardIcon={calorieIcon}
            macronutrientCardName="Calories"
            macronutrientCardValue={`${profileIndexMainData[0].keyData.calorieCount.toLocaleString(
              "en-US",
            )}kCal`}
            macronutrientCardColumn="4 / 5"
            macronutrientCardRow="1 / 2"
          />
          <MacronutrientCard
            macronutrientCardBackgroundColor="rgba(74, 184, 255, 0.1)"
            macronutrientCardIcon={proteinIcon}
            macronutrientCardName="Proteines"
            macronutrientCardValue={`${profileIndexMainData[0].keyData.proteinCount.toLocaleString(
              "en-US",
            )}g`}
            macronutrientCardColumn="4 / 5"
            macronutrientCardRow="2 / 3"
          />
          <ChartCard
            chartCardContainerBackgroundColor="#FF0000"
            chartCardContainerColumn="1 / 2"
            chartCardContainerRow="3 / 5"
          ></ChartCard>
          <ChartCard
            chartCardContainerBackgroundColor="#282D30"
            chartCardContainerColumn="2 / 3"
            chartCardContainerRow="3 / 5"
          ></ChartCard>
          <ChartCard
            chartCardContainerWidth="258px"
            chartCardContainerHeight="263px"
            chartCardContainerBackgroundColor="#FBFBFB"
            chartCardContainerColumn="3 / 4"
            chartCardContainerRow="3 / 5"
          ></ChartCard>
          <MacronutrientCard
            macronutrientCardBackgroundColor="rgba(249, 206, 35, 0.1)"
            macronutrientCardIcon={carbohydrateIcon}
            macronutrientCardName="Glucides"
            macronutrientCardValue={`${profileIndexMainData[0].keyData.carbohydrateCount.toLocaleString(
              "en-US",
            )}g`}
            macronutrientCardColumn="4 / 5"
            macronutrientCardRow="3 / 4"
          />
          <MacronutrientCard
            macronutrientCardBackgroundColor="rgba(253, 81, 129, 0.1)"
            macronutrientCardIcon={lipidIcon}
            macronutrientCardName="Lipides"
            macronutrientCardValue={`${profileIndexMainData[0].keyData.lipidCount.toLocaleString(
              "en-US",
            )}g`}
            macronutrientCardColumn="4 / 5"
            macronutrientCardRow="4 / 5"
          />
        </DashboardGraphicsContainer>
      </DashboardContainer>
    </>
  );
}

export default Dashboard;
