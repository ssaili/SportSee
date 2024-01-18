import PropTypes from "prop-types";
import "./style.scss";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Rectangle,
} from "recharts";

function AverageSessionsChart({ data }) {
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

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="recharts-linechart-tooltip">
          <p className="recharts-linechart-tooltip-value">
            {payload[0].value + " min"}
          </p>
        </div>
      );
    }

    return null;
  };

  const CustomCursor = ({ points }) => {
    return (
      <Rectangle
        width={1000}
        height={1000}
        x={points[0].x}
        y={points[0].y - 100}
        style={{ background: "red", opacity: 0.1 }}
      />
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <p className="recharts-linechart-title">Durée moyenne des sessions</p>
      <LineChart
        data={data}
        margin={{ top: 80, right: 20, left: 20, bottom: 10 }}
      >
        <defs>
          <linearGradient id="lineColor">
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
        <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          dot={false}
          strokeWidth={2}
          stroke="url(#lineColor)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

AverageSessionsChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AverageSessionsChart;
