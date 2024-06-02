import { createElement } from '../functions/elementCreate.js';

const icons = {
  vegetarian: { label : 'Vegetarian', icon: '🌿', color: "darkgreen" },
  vegan: { label : 'Vegan', icon: '🌱', color: "green" },
  containsNuts: { label : 'Contains Nuts', icon: '🥜', color: "brown" },
  glutenFree: { label : 'Gluten Free', icon: '🌾', color: "brown" },
  dairyFree: {  label : 'Dairy Free', icon: '🥛', color: "blue" },
}

export const Dietary = (dietary, styling) => {

  const div = createElement('div', styling.dietary, "dietary");

  if (!dietary) return div;

  if (dietary.vegan) dietary.vegetarian = true;

  Object.entries(icons).forEach(([key, value]) => {
    if (dietary[key]) {
      const addStyling = {
        fontSize: '0.55rem',
        padding: '0.125rem 0.25rem',
        borderRadius: '20rem',
      }
      const span = createElement('span', addStyling);
      span.style.backgroundColor = value.color;
      span.textContent = value.icon + ' ' + value.label;
      div.append(span);
    }
  })



  return div;
}