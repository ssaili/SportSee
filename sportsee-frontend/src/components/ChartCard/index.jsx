import PropTypes from "prop-types";

function ChartCard({
  chartCardContainerBackgroundColor,
  chartCardContainerWidth,
  chartCardContainerHeight,
  children,
}) {
  return (
    <div
      style={{
        background: chartCardContainerBackgroundColor,
        width: chartCardContainerWidth,
        height: chartCardContainerHeight,
      }}
    >
      {children}
    </div>
  );
}

ChartCard.propTypes = {
  chartCardContainerBackgroundColor: PropTypes.string.isRequired,
  chartCardContainerWidth: PropTypes.string.isRequired,
  chartCardContainerHeight: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default ChartCard;
