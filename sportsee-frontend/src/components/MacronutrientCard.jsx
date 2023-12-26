import styled from "styled-components";

const MacronutrientCardContainer = styled.div`
  width: 250px;
  padding-inline: 30px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  background-color: #fbfbfb;
`;

const MacronutrientCardIconContainer = styled.div`
  margin-right: 30px;
  border-radius: 6px;
  padding: 18px 22px;
`;

const MacronutrientCardValue = styled.p`
  font-weight: 700;
  font-size: 20px;
`;

const MacronutrientCardName = styled.p`
  font-weight: 500;
  font-size: 14px;
`;

function MacronutrientCard({
  macronutrientCardIcon,
  macronutrientCardBackgroundColor,
  macronutrientCardName,
  macronutrientCardValue,
  macronutrientCardColumn,
  macronutrientCardRow,
}) {
  return (
    <MacronutrientCardContainer>
      <MacronutrientCardIconContainer
        style={{
          background: macronutrientCardBackgroundColor,
          gridColumn: macronutrientCardColumn,
          gridRow: macronutrientCardRow,
        }}
      >
        <img
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

export default MacronutrientCard;
