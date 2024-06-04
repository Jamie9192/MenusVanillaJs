import { createElement } from '../functions/elementCreate.js';
import { Dish } from './Dish.js';

const CategoryHeader = (label, styling) => {
  const div = createElement('div', styling.categoryHeader);
  const nameDiv = createElement('div', styling.categoryName);

  nameDiv.textContent = label;
  div.append(nameDiv);
  return div;
}

const CategoryPrice = (price, styling) => {
  const div = createElement('div', styling.categoryPrice);
  div.textContent = price && price.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
  return div;
}

const CategoryDescription = (description, styling) => {
  const div = createElement('div', styling.categoryDescription);
  div.textContent = description;
  return div;
}


export const Category = (label, data, styling, layout) => {
  const div = createElement('div', styling.category, 'category');
  div.style.width = styling.layout.colElWidth || "100%";

  const header = CategoryHeader(label, styling);
  div.append(header);

  const price = CategoryPrice(data.price, styling);

  const description = CategoryDescription(data.description, styling);
  div.append(description);

  const dishDivContainer = createElement('div', styling.dishContainer);
  div.append(dishDivContainer);

  Object.entries(data.dishes).forEach((dish) => {
    const dishDiv = Dish(dish, styling);
    dishDivContainer.append(dishDiv);
  });

  return div;
}