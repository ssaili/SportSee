import { USER_AVERAGE_SESSIONS } from "../../data/mockData";
import "./style.scss";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";

function AverageSessionsChart() {
  const formatDay = (day) => {
    switch (day) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
      default:
        return day;
    }
  };

  return (
    <ResponsiveContainer width="100%" height="70%">
      <p className="recharts-linechart-title">Durée moyenne des sessions</p>
      <LineChart
        data={USER_AVERAGE_SESSIONS[0].sessions}
        margin={{ top: 0, right: 20, left: 20, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorUv">
            <stop offset="40%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,1)" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tickMargin={15}
          tick={{ fill: "rgba(255,255,255,0.5)" }}
          tickFormatter={formatDay}
        />
        <YAxis hide />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sessionLength"
          dot={false}
          strokeWidth={2}
          stroke="url(#colorUv)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default AverageSessionsChart;
