import React from "react";
import menuData from "./../../assets/utils/MenuData.js";
import {
  MenuContainer,
  MenuCard,
  Img,
  DescriptionWrapper,
  MenuTitle,
  MenuDescription,
  MenuPrice,
} from "./MenuElements";

const Menu = ({ active, id, title, description, price }) => {
  const i = active;

  return (
    <>
      <MenuContainer>
        {menuData[i].items.map((item, index) => (
          <MenuCard id={id} key={index}>
            <Img src={`${item.img}`} alt={`${item.alt}`} />
            <DescriptionWrapper>
              <MenuTitle title={title}>{item.title}</MenuTitle>
              <MenuDescription description={description}>
                {item.description}
              </MenuDescription>
              <MenuPrice price={price}>{item.price}</MenuPrice>
            </DescriptionWrapper>
          </MenuCard>
        ))}
      </MenuContainer>
    </>
  );
};

export default Menu;
