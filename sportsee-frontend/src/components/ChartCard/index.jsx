import PropTypes from "prop-types";

function ChartCard({
  chartCardContainerBackgroundColor,
  chartCardContainerWidth,
  chartCardContainerHeight,
}) {
  return (
    <div
      style={{
        background: chartCardContainerBackgroundColor,
        width: chartCardContainerWidth,
        height: chartCardContainerHeight,
      }}
    ></div>
  );
}

ChartCard.propTypes = {
  chartCardContainerBackgroundColor: PropTypes.string.isRequired,
  chartCardContainerWidth: PropTypes.string.isRequired,
  chartCardContainerHeight: PropTypes.string.isRequired,
};

export default ChartCard;
