import { useLocation, useParams } from "react-router-dom";
import Header from "../../components/Header/index";
import SideNavigationBar from "../../components/SideNavigationBar/index";
import ActivityChart from "../../components/ActivityChart/index";
import Error from "../Error/index";
import {
  DashboardContainer,
  DashboardUserFirstNameContainer,
  DashboardUserFirstName,
  DashboardUserGoal,
  DashboardDataContainer,
  DashboardGraphicsContainer,
  DashboardLowerGraphicsContainer,
  DashboardMacronutrientsContainer,
} from "./style";
import { USER_MAIN_DATA } from "../../data/mockData";
import MacronutrientCard from "../../components/MacronutrientCard";
import calorieIcon from "../../assets/icons/calorie-icon.png";
import proteinIcon from "../../assets/icons/protein-icon.png";
import carbohydrateIcon from "../../assets/icons/carbohydrate-icon.png";
import lipidIcon from "../../assets/icons/lipid-icon.png";
import ChartCard from "../../components/ChartCard";

function Dashboard() {
  const { profileIndex } = useParams();

  const { mockOrApiData } = useLocation().state ?? {};

  const profileIndexRegex = /^(([12])|([18]))$/;

  if (!profileIndexRegex.test(profileIndex) && mockOrApiData === undefined) {
    return <Error />;
  } else {
    const profileIndexMainData = USER_MAIN_DATA.filter(
      (user) => user.id === parseInt(profileIndex),
    );

    return (
      <>
        <Header />
        <SideNavigationBar />
        <DashboardContainer>
          <DashboardUserFirstNameContainer>
            Bonjour{" "}
            <DashboardUserFirstName>
              {profileIndexMainData[0].userInfos.firstName}
            </DashboardUserFirstName>
          </DashboardUserFirstNameContainer>
          <DashboardUserGoal>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </DashboardUserGoal>
          <DashboardDataContainer>
            <DashboardGraphicsContainer>
              <ChartCard
                chartCardContainerBackgroundColor="#FBFBFB"
                chartCardContainerWidth="100%"
                chartCardContainerHeight="52%"
              >
                <ActivityChart />
              </ChartCard>
              <DashboardLowerGraphicsContainer>
                <ChartCard
                  chartCardContainerBackgroundColor="#FF0000"
                  chartCardContainerWidth="30%"
                  chartCardContainerHeight="100%"
                ></ChartCard>
                <ChartCard
                  chartCardContainerBackgroundColor="#282D30"
                  chartCardContainerWidth="30%"
                  chartCardContainerHeight="100%"
                ></ChartCard>
                <ChartCard
                  chartCardContainerBackgroundColor="#FBFBFB"
                  chartCardContainerWidth="30%"
                  chartCardContainerHeight="100%"
                ></ChartCard>
              </DashboardLowerGraphicsContainer>
            </DashboardGraphicsContainer>
            <DashboardMacronutrientsContainer>
              <MacronutrientCard
                macronutrientCardBackgroundColor="rgba(255, 0, 0, 0.07)"
                macronutrientCardIcon={calorieIcon}
                macronutrientCardName="Calories"
                macronutrientCardValue={`${profileIndexMainData[0].keyData.calorieCount.toLocaleString(
                  "en-US",
                )}kCal`}
              />
              <MacronutrientCard
                macronutrientCardBackgroundColor="rgba(74, 184, 255, 0.1)"
                macronutrientCardIcon={proteinIcon}
                macronutrientCardName="Proteines"
                macronutrientCardValue={`${profileIndexMainData[0].keyData.proteinCount.toLocaleString(
                  "en-US",
                )}g`}
              />
              <MacronutrientCard
                macronutrientCardBackgroundColor="rgba(249, 206, 35, 0.1)"
                macronutrientCardIcon={carbohydrateIcon}
                macronutrientCardName="Glucides"
                macronutrientCardValue={`${profileIndexMainData[0].keyData.carbohydrateCount.toLocaleString(
                  "en-US",
                )}g`}
              />
              <MacronutrientCard
                macronutrientCardBackgroundColor="rgba(253, 81, 129, 0.1)"
                macronutrientCardIcon={lipidIcon}
                macronutrientCardName="Lipides"
                macronutrientCardValue={`${profileIndexMainData[0].keyData.lipidCount.toLocaleString(
                  "en-US",
                )}g`}
              />
            </DashboardMacronutrientsContainer>
          </DashboardDataContainer>
        </DashboardContainer>
      </>
    );
  }
}

export default Dashboard;
