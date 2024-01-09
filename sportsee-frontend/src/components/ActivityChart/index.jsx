import "./style.scss";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";

function ActivityChart({ data }) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="recharts-barchart-tooltip">
          <p className="recharts-barchart-tooltip-value">
            {payload[0].value + "kg"}
          </p>
          <p className="recharts-barchart-tooltip-value">
            {payload[1].value + "Kcal"}
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <p className="recharts-barchart-title">Activité quotidienne</p>
      <BarChart
        data={data}
        margin={{
          top: 40,
          right: 40,
          left: 40,
          bottom: 40,
        }}
        barSize={7}
        barGap={7}
      >
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis
          dataKey="day"
          tick={{ fill: "#9B9EAC" }}
          tickLine={false}
          tickFormatter={(date) => new Date(date).getDate()}
          tickMargin={15}
          stroke="#DEDEDE"
          strokeWidth={2}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#9B9EAC" }}
          tickCount={3}
          domain={["dataMin - 1", "dataMax"]}
          tickMargin={40}
        />
        <YAxis yAxisId="left" orientation="left" hide />
        <Tooltip content={<CustomTooltip />} offset={30} />
        <Legend
          align="right"
          verticalAlign="top"
          iconSize={8}
          iconType="circle"
          height={80}
        />
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="#282D30"
          radius={[5, 5, 0, 0]}
          name="Poids (kg)"
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          fill="#E60000"
          radius={[5, 5, 0, 0]}
          name="Calories brûlées (kCal)"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ActivityChart;
