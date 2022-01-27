import React from "react";
import menuData from "./../../assets/utils/MenuData.js";
import {
  CategoryMenuContainer,
  CategoryMenuWrapper,
  CategoryCard,
  Icon,
  CategoryTitle,
} from "./CategoryMenuElements";

const CategoryMenu = ({ active, setActive, category, icon, title }) => {
  const handleClick = (index) => {
    setActive(index);
  };
  
  return (
    <>
      <CategoryMenuContainer>
        <CategoryMenuWrapper>
          {menuData.map((item, index) => (
            <CategoryCard
              category={category}
              key={index}
              onClick={() => handleClick(index)}
              className={index === active ? "active" : null}
            >
              <Icon icon={icon}>{item.icon}</Icon>
              <CategoryTitle title={title}>{item.title}</CategoryTitle>
            </CategoryCard>
          ))}
        </CategoryMenuWrapper>
      </CategoryMenuContainer>
    </>
  );
};

export default CategoryMenu;
