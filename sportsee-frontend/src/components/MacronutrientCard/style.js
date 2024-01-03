import styled from "styled-components";

const MacronutrientCardContainer = styled.div`
  width: 100%;
  height: 20.5%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  background-color: #fbfbfb;

  @media (max-width: 1439px) {
    width: 21.5%;
    height: 82%;
    justify-content: space-evenly;
  }
`;

const MacronutrientCardIconContainer = styled.div`
  margin-inline: 30px;
  border-radius: 6px;
  padding: 18px 22px;

  @media (max-width: 1439px) {
    margin-inline: 0;
  }

  @media (min-width: 1920px) {
    margin-inline: 70px;
  }

  @media (min-width: 2560px) {
    margin-inline: 100px;
  }
`;

const MacronutrientCardImg = styled.img`
  @media (min-width: 2560px) {
    height: 40px;
  }
`;

const MacronutrientCardValue = styled.p`
  font-weight: 700;
  font-size: 20px;

  @media (max-width: 1439px) {
    font-size: 18px;
  }

  @media (min-width: 2560px) {
    font-size: 30px;
  }
`;

const MacronutrientCardName = styled.p`
  font-weight: 500;
  font-size: 14px;

  @media (max-width: 1439px) {
    font-size: 12.6px;
  }

  @media (min-width: 2560px) {
    font-size: 21px;
  }
`;

export {
  MacronutrientCardContainer,
  MacronutrientCardIconContainer,
  MacronutrientCardImg,
  MacronutrientCardValue,
  MacronutrientCardName,
};
