import PropTypes from "prop-types";
import {
  MacronutrientCardContainer,
  MacronutrientCardIconContainer,
  MacronutrientCardImg,
  MacronutrientCardValue,
  MacronutrientCardName,
} from "./style";

function MacronutrientCard({
  macronutrientCardIcon,
  macronutrientCardBackgroundColor,
  macronutrientCardName,
  macronutrientCardValue,
}) {
  return (
    <MacronutrientCardContainer>
      <MacronutrientCardIconContainer
        style={{
          background: macronutrientCardBackgroundColor,
        }}
      >
        <MacronutrientCardImg
          src={macronutrientCardIcon}
          alt={`${macronutrientCardName} icon`}
        />
      </MacronutrientCardIconContainer>
      <div>
        <MacronutrientCardValue>
          {macronutrientCardValue}
        </MacronutrientCardValue>
        <MacronutrientCardName>{macronutrientCardName}</MacronutrientCardName>
      </div>
    </MacronutrientCardContainer>
  );
}

MacronutrientCard.propTypes = {
  macronutrientCardIcon: PropTypes.string.isRequired,
  macronutrientCardBackgroundColor: PropTypes.string.isRequired,
  macronutrientCardName: PropTypes.string.isRequired,
  macronutrientCardValue: PropTypes.string.isRequired,
};

export default MacronutrientCard;
