import styled from "styled-components";
import { ResponsiveContainer } from "recharts";

const ActivityChartContainer = styled(ResponsiveContainer)`
  position: relative;
  font-weight: 500;
  font-size: 15px;
`;

const ActivityChartTitle = styled.p`
  position: absolute;
  top: 40px;
  left: 40px;
`;

export { ActivityChartContainer, ActivityChartTitle };
