import styled from "styled-components";

const MacronutrientCardContainer = styled.div`
  width: 100%;
  height: 20.5%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  background-color: #fbfbfb;
`;

const MacronutrientCardIconContainer = styled.div`
  margin-inline: 30px;
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

export {
  MacronutrientCardContainer,
  MacronutrientCardIconContainer,
  MacronutrientCardValue,
  MacronutrientCardName,
};
