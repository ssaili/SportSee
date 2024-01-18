import { useLocation, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./style.scss";
import Header from "../../components/Header/index";
import SideNavigationBar from "../../components/SideNavigationBar/index";
import ChartCard from "../../components/ChartCard";
import Loader from "../../components/Loader";
import ActivityChart from "../../components/ActivityChart/index";
import AverageSessionsChart from "../../components/AverageSessionsChart";
import PerformanceChart from "../../components/PerformanceChart";
import GoalChart from "../../components/GoalChart";
import Error from "../Error/index";
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

function Dashboard() {
  const { profileIndex } = useParams();
  const { mockData } = useLocation().state ?? {};
  const profileIndexRegex = /^(12|18)$/;

  const {
    data: mainData,
    loading: loadingMainData,
    error: errorMainData,
  } = useFetch(
    mockData,
    `http://localhost:3000/user/${profileIndex}`,
    USER_MAIN_DATA,
    profileIndex,
  );

  const {
    data: activity,
    loading: loadingActivity,
    error: errorActivity,
  } = useFetch(
    mockData,
    `http://localhost:3000/user/${profileIndex}/activity`,
    USER_ACTIVITY,
    profileIndex,
  );

  const {
    data: averageSessions,
    loading: loadingAverageSessions,
    error: errorAverageSessions,
  } = useFetch(
    mockData,
    `http://localhost:3000/user/${profileIndex}/average-sessions`,
    USER_AVERAGE_SESSIONS,
    profileIndex,
  );

  const {
    data: performance,
    loading: loadingPerformance,
    error: errorPerformance,
  } = useFetch(
    mockData,
    `http://localhost:3000/user/${profileIndex}/performance`,
    USER_PERFORMANCE,
    profileIndex,
  );

  const userMainData = mainData;
  const userActivity = activity;
  const userAverageSessions = averageSessions;
  const userPerformance = performance;

  if (!profileIndexRegex.test(profileIndex) || mockData === undefined) {
    return <Error />;
  }

  if (
    errorMainData ||
    errorActivity ||
    errorAverageSessions ||
    errorPerformance
  ) {
    return <Error />;
  }

  if (
    loadingMainData ||
    loadingActivity ||
    loadingAverageSessions ||
    loadingPerformance
  ) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <SideNavigationBar />
      <div className="dashboard">
        <p className="dashboard__greeting">
          Bonjour{" "}
          <span className="dashboard__user-first-name">
            {userMainData.userInfos.firstName}
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
              <ActivityChart data={userActivity.sessions} />
            </ChartCard>
            <div className="dashboard__lower-charts-container">
              <ChartCard
                className="average-sessions-chart"
                chartCardContainerBackgroundColor="#FF0000"
                chartCardContainerWidth="30%"
                chartCardContainerHeight="100%"
              >
                <AverageSessionsChart data={userAverageSessions.sessions} />
              </ChartCard>
              <ChartCard
                className="performance-chart"
                chartCardContainerBackgroundColor="#282D30"
                chartCardContainerWidth="30%"
                chartCardContainerHeight="100%"
              >
                <PerformanceChart data={[...userPerformance.data].reverse()} />
              </ChartCard>
              <ChartCard
                className="goal-chart"
                chartCardContainerBackgroundColor="#FBFBFB"
                chartCardContainerWidth="30%"
                chartCardContainerHeight="100%"
              >
                <GoalChart data={userMainData} />
              </ChartCard>
            </div>
          </div>
          <div className="dashboard__macronutrient-container">
            <MacronutrientCard
              macronutrientCardBackgroundColor="rgba(255, 0, 0, 0.07)"
              macronutrientCardIcon={calorieIcon}
              macronutrientCardName="Calories"
              macronutrientCardValue={`${userMainData.keyData.calorieCount.toLocaleString(
                "en-US",
              )}kCal`}
            />
            <MacronutrientCard
              macronutrientCardBackgroundColor="rgba(74, 184, 255, 0.1)"
              macronutrientCardIcon={proteinIcon}
              macronutrientCardName="Proteines"
              macronutrientCardValue={`${userMainData.keyData.proteinCount.toLocaleString(
                "en-US",
              )}g`}
            />
            <MacronutrientCard
              macronutrientCardBackgroundColor="rgba(249, 206, 35, 0.1)"
              macronutrientCardIcon={carbohydrateIcon}
              macronutrientCardName="Glucides"
              macronutrientCardValue={`${userMainData.keyData.carbohydrateCount.toLocaleString(
                "en-US",
              )}g`}
            />
            <MacronutrientCard
              macronutrientCardBackgroundColor="rgba(253, 81, 129, 0.1)"
              macronutrientCardIcon={lipidIcon}
              macronutrientCardName="Lipides"
              macronutrientCardValue={`${userMainData.keyData.lipidCount.toLocaleString(
                "en-US",
              )}g`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
