import styled from "styled-components";

const ChartCardContainer = styled.div``;

function ChartCard({
  chartCardContainerBackgroundColor,
  chartCardContainerColumn,
  chartCardContainerRow,
}) {
  return (
    <ChartCardContainer
      style={{
        background: chartCardContainerBackgroundColor,
        gridColumn: chartCardContainerColumn,
        gridRow: chartCardContainerRow,
      }}
    ></ChartCardContainer>
  );
}

export default ChartCard;
