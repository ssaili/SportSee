import PropTypes from "prop-types";
import "./style.scss";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

function PerformanceChart({ data }) {
  const formatKind = (kind) => {
    switch (kind) {
      case 1:
        return "Cardio";
      case 2:
        return "Energie";
      case 3:
        return "Endurance";
      case 4:
        return "Force";
      case 5:
        return "Vitesse";
      case 6:
        return "Intensité";
      default:
        return kind;
    }
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data} outerRadius="70%">
        <PolarGrid radialLines={false} stroke="#FFFFFF" />
        <PolarAngleAxis
          dataKey="kind"
          tickFormatter={formatKind}
          tick={{
            dy: 4,
            fill: "#fff",
            fontSize: 12,
            fontWeight: 500,
          }}
        />
        <Radar
          dataKey="value"
          stroke="#FF0101"
          fill="#FF0101"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}

PerformanceChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default PerformanceChart;
