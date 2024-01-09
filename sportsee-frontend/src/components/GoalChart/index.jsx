import { USER_MAIN_DATA } from "../../data/mockData";
import "./style.scss";
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";

function GoalChart({ data }) {
  const scoreValue = data.todayScore ?? data.score;
  const goalData = [{ score: scoreValue }];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <p className="recharts-radialchart-title">Score</p>
      <p className="recharts-radialchart-description">
        <span className="recharts-radialchart-description-score">
          {scoreValue * 100 + "%"}
        </span>
        <br />
        de votre
        <br />
        objectif
      </p>
      <RadialBarChart
        outerRadius="0%"
        data={goalData}
        startAngle={90}
        endAngle={450}
      >
        <RadialBar
          data={[{ score: 1 }]}
          dataKey="score"
          barSize={160}
          fill="#FFF"
          isAnimationActive={false}
        />
        <RadialBar
          dataKey="score"
          barSize={10}
          cornerRadius={5}
          fill="#FF0000"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default GoalChart;
