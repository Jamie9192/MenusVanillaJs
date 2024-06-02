import { Dietary } from './Dietary.js';

const Label = (label, styling) => {
  const div = document.createElement('span');
  Object.assign(div.style, styling.dishName);
  div.textContent = label;
  return div;
}

const DishHeader = (styling) => {
  const div = document.createElement('div');
  Object.assign(div.style, styling.dishHeader);
  return div;
}


const Price = (price, styling) => {
  const div = document.createElement('span');
  Object.assign(div.style, styling.dishPrice);
  div.textContent = price && price.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
  return div;
}

const Description = (description, styling) => {
  const div = document.createElement('div');
  Object.assign(div.style, styling.dishDescription);
  div.textContent = description;
  return div;
}

export const Dish = ([name, data], styling) => {
  const div = document.createElement('div');
  div.classList.add('dish');
  Object.assign(div.style, styling.dish);

  const header = DishHeader(styling);
  const label = Label(name, styling);

  const dietary = Dietary(data.dietary, styling);
  if (!data.dietary) dietary.style.display = 'none';

  const price = Price(data.price, styling);
  const description = Description(data.description, styling, dietary);
  if(!data.description) description.style.display = 'none';

  header.append(label);
  header.append(price);
  description.append(dietary);
  div.append(header, description);

  return div;
}