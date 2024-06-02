import { Dish } from './Dish.js';
import { calculateWidthFlex } from '../functions/calculate.js';

const CategoryHeader = (label, styling) => {
  const div = document.createElement('div');
  Object.assign(div.style, styling.categoryHeader);
  const nameDiv = document.createElement('div');
  nameDiv.textContent = label;
  Object.assign(nameDiv.style, styling.categoryName);
  div.append(nameDiv);
  return div;
}

const CategoryPrice = (price, styling) => {
  const div = document.createElement('div');
  Object.assign(div.style, styling.categoryPrice);
  div.textContent = price;
  return div;
}

const CategoryDescription = (description, styling) => {
  const div = document.createElement('div');
  Object.assign(div.style, styling.categoryDescription);
  div.textContent = description;
  return div;
}


export const Category = (label, data, styling, layout, parent) => {
  const div = document.createElement('div');
  div.classList.add('category');
  Object.assign(div.style, styling.category);
  div.style.width = calculateWidthFlex(layout.colsPerPage || 1)
  parent.append(div);

  const header = CategoryHeader(label, styling);
  div.append(header);

  const price = CategoryPrice(data.price, styling);
  header.append(price);

  const description = CategoryDescription(data.description, styling);
  div.append(description);

  const dishDivContainer = document.createElement('div');
  Object.assign(dishDivContainer.style, styling.dishContainer);
  div.append(dishDivContainer);

  Object.entries(data.dishes).forEach((dish) => {
    const dishDiv = Dish(dish, styling);
    dishDivContainer.append(dishDiv);
  });

  return div;
}