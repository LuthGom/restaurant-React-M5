import styled from "styled-components";

export const MenuContainer = styled.div`
  grid-area: menu;
  width: 100%;
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media screen and (max-width: 768px){
    justify-content: center;
  }
`;

export const MenuCard = styled.div`
  background: #fff;
  padding: 20px;
  margin: 20px;
  height: 290px;
  width: 215px;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: fit-content;
    border: 1px solid #dadada;
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    padding: 10px 20px;
  }
`;

export const Img = styled.img`
  display: block;
  margin: auto;
  max-height: 200px;
  max-width: 180px;

  @media screen and (max-width: 480px) {
    width: 120px;
    height: 86px;
    order: 0;
    margin: 0 0 10px 0;
  }
`;

export const DescriptionWrapper = styled.div`
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;

  @media screen and (max-width: 480px) {
    flex-grow: 1;
    margin-left: 5px;
  }
`;

export const MenuTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
`;

export const MenuDescription = styled.p`
  font-weight: 300;
  font-size: 12px;
  color: #848484;
`;

export const MenuPrice = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #fdc844;

  @media screen and (max-width: 480px) {
    text-align: right;
    margin: 5px 0 0 auto;
  }
`;
