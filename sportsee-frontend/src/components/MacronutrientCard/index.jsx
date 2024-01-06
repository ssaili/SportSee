import PropTypes from "prop-types";
import "./style.scss";

function MacronutrientCard({
  macronutrientCardIcon,
  macronutrientCardBackgroundColor,
  macronutrientCardName,
  macronutrientCardValue,
}) {
  return (
    <div className="macronutrient-card">
      <div
        className="macronutrient-card__icon-container"
        style={{
          background: macronutrientCardBackgroundColor,
        }}
      >
        <img
          className="macronutrient-card__icon"
          src={macronutrientCardIcon}
          alt={`${macronutrientCardName} icon`}
        />
      </div>
      <div>
        <p className="macronutrient-card__value">{macronutrientCardValue}</p>
        <p className="macronutrient-card__name">{macronutrientCardName}</p>
      </div>
    </div>
  );
}

MacronutrientCard.propTypes = {
  macronutrientCardIcon: PropTypes.string.isRequired,
  macronutrientCardBackgroundColor: PropTypes.string.isRequired,
  macronutrientCardName: PropTypes.string.isRequired,
  macronutrientCardValue: PropTypes.string.isRequired,
};

export default MacronutrientCard;
