const Label = (label, styling) => {
  const div = document.createElement('div');
  Object.assign(div.style, styling.dishName);
  div.textContent = label;
  return div;
}

const Price = (price, styling) => {
  const div = document.createElement('div');
  Object.assign(div.style, styling.dishPrice);
  div.textContent = price;
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

  const label = Label(name, styling);
  const price = Price(data.price, styling);
  const description = Description(data.description, styling);

  div.append(label, price, description);
  return div;
}