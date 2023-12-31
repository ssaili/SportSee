import { useLocation, useParams } from "react-router-dom";
import Header from "../../components/Header/index";
import SideNavigationBar from "../../components/SideNavigationBar/index";
import ActivityChart from "../../components/ActivityChart/index";
import AverageSessionsChart from "../../components/AverageSessionsChart";
import PerformanceChart from "../../components/PerformanceChart";
import GoalChart from "../../components/GoalChart";
import Error from "../Error/index";
import "./style.scss";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../../data/mockData";
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
    const userMainData = USER_MAIN_DATA.filter(
      (user) => user.id === parseInt(profileIndex),
    );

    const userActivity = USER_ACTIVITY.filter(
      (user) => user.userId === parseInt(profileIndex),
    );

    const userAverageSessions = USER_AVERAGE_SESSIONS.filter(
      (user) => user.userId === parseInt(profileIndex),
    );

    const userPerformance = USER_PERFORMANCE.filter(
      (user) => user.userId === parseInt(profileIndex),
    );

    return (
      <>
        <Header />
        <SideNavigationBar />
        <div className="dashboard">
          <p className="dashboard__greeting">
            Bonjour{" "}
            <span className="dashboard__user-first-name">
              {userMainData[0].userInfos.firstName}
            </span>
          </p>
          <p className="dashboard__user-goal">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
          <div className="dashboard__data-container">
            <div className="dashboard__charts-container">
              <ChartCard
                className="activity-chart"
                chartCardContainerBackgroundColor="#FBFBFB"
                chartCardContainerWidth="100%"
                chartCardContainerHeight="52%"
              >
                <ActivityChart data={userActivity[0].sessions} />
              </ChartCard>
              <div className="dashboard__lower-charts-container">
                <ChartCard
                  className="average-sessions-chart"
                  chartCardContainerBackgroundColor="#FF0000"
                  chartCardContainerWidth="30%"
                  chartCardContainerHeight="100%"
                >
                  <AverageSessionsChart
                    data={userAverageSessions[0].sessions}
                  />
                </ChartCard>
                <ChartCard
                  className="performance-chart"
                  chartCardContainerBackgroundColor="#282D30"
                  chartCardContainerWidth="30%"
                  chartCardContainerHeight="100%"
                >
                  <PerformanceChart
                    data={[...userPerformance[0].data].reverse()}
                  />
                </ChartCard>
                <ChartCard
                  className="goal-chart"
                  chartCardContainerBackgroundColor="#FBFBFB"
                  chartCardContainerWidth="30%"
                  chartCardContainerHeight="100%"
                >
                  <GoalChart data={userMainData[0]} />
                </ChartCard>
              </div>
            </div>
            <div className="dashboard__macronutrient-container">
              <MacronutrientCard
                macronutrientCardBackgroundColor="rgba(255, 0, 0, 0.07)"
                macronutrientCardIcon={calorieIcon}
                macronutrientCardName="Calories"
                macronutrientCardValue={`${userMainData[0].keyData.calorieCount.toLocaleString(
                  "en-US",
                )}kCal`}
              />
              <MacronutrientCard
                macronutrientCardBackgroundColor="rgba(74, 184, 255, 0.1)"
                macronutrientCardIcon={proteinIcon}
                macronutrientCardName="Proteines"
                macronutrientCardValue={`${userMainData[0].keyData.proteinCount.toLocaleString(
                  "en-US",
                )}g`}
              />
              <MacronutrientCard
                macronutrientCardBackgroundColor="rgba(249, 206, 35, 0.1)"
                macronutrientCardIcon={carbohydrateIcon}
                macronutrientCardName="Glucides"
                macronutrientCardValue={`${userMainData[0].keyData.carbohydrateCount.toLocaleString(
                  "en-US",
                )}g`}
              />
              <MacronutrientCard
                macronutrientCardBackgroundColor="rgba(253, 81, 129, 0.1)"
                macronutrientCardIcon={lipidIcon}
                macronutrientCardName="Lipides"
                macronutrientCardValue={`${userMainData[0].keyData.lipidCount.toLocaleString(
                  "en-US",
                )}g`}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
