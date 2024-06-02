import { createElement } from '../functions/elementCreate.js';

import { Dietary } from './Dietary.js';

const Label = (label, styling) => {
  const div = createElement('span', styling.dishName);
  div.textContent = label;
  return div;
}

const DishHeader = (styling) => {
  const div = createElement('div', styling.dishHeader);
  return div;
}


const Price = (price, styling) => {
  const div = createElement('span', styling.dishPrice);
  div.textContent = price && price.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
  return div;
}

const Description = (description, styling) => {
  const div = createElement('div', styling.dishDescription);
  div.textContent = description;
  return div;
}

export const Dish = ([name, data], styling) => {

  const div = createElement('div', styling.dish, "dish");


  const header = DishHeader(styling);

  const label = Label(name, styling);
  header.append(label);

  let ChildrenCount = 1;

  const price = data.price && Price(data.price, styling);
  if (price) header.append(price);

  const dietary = data.dietary && Dietary(data.dietary, styling);
  if (dietary) header.append(dietary);

  div.append(header);

  const description = data.description && ChildrenCount++ && Description(data.description, styling, dietary);
if (name == "Turkish") console.log(ChildrenCount)
  if (description) div.append(description);
  div.style.gridRow = `span ${ChildrenCount}`;

  return div;
}