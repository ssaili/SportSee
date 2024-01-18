import PropTypes from "prop-types";

function ChartCard({
  className,
  chartCardContainerBackgroundColor,
  chartCardContainerWidth,
  chartCardContainerHeight,
  children,
}) {
  return (
    <div
      className={className}
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
  className: PropTypes.string.isRequired,
  chartCardContainerBackgroundColor: PropTypes.string.isRequired,
  chartCardContainerWidth: PropTypes.string.isRequired,
  chartCardContainerHeight: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default ChartCard;
