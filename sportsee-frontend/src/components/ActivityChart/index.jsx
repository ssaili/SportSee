import { USER_ACTIVITY } from "../../data/mockData";
import { ActivityChartContainer, ActivityChartTitle } from "./style";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  Bar,
} from "recharts";

function ActivityChart() {
  return (
    <ActivityChartContainer width="100%" height="100%">
      <ActivityChartTitle>Activité quotidienne</ActivityChartTitle>
      <BarChart
        data={USER_ACTIVITY[0].sessions}
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
          scale="point"
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#282D30"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#9B9EAC" }}
          tickCount={3}
          domain={["dataMin - 1", "dataMax"]}
          tickMargin={40}
        />
        <YAxis yAxisId="left" orientation="left" stroke="#E60000" hide />
        <Tooltip />
        <Legend
          align="right"
          verticalAlign="top"
          iconSize={8}
          iconType="circle"
          height={80}
          formatter={(value) => (
            <span style={{ color: "#74798C" }}>{value}</span>
          )}
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
    </ActivityChartContainer>
  );
}

export default ActivityChart;
