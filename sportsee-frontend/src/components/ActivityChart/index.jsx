import { USER_ACTIVITY } from "../../data/mockData";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

function ActivityChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
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
          tickLine={false}
          tickFormatter={(date) => new Date(date).getDate()}
          tickMargin={15}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#282D30"
          axisLine={false}
          tickLine={false}
          tickCount={3}
          domain={["dataMin - 1", "dataMax"]}
          tickMargin={20}
        />
        <YAxis yAxisId="left" orientation="left" stroke="#E60000" hide />
        <Tooltip />
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
