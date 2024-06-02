import { createElement } from '../functions/elementCreate.js';

export const Logo = (business, str, styling) => {
  if (!str) return;
  styling.logoContainer.width = styling.layout.colElWidth || "100%";
  const div = createElement('div', styling.logoContainer, "logo");

  const path = `../assets/${business}/${str}`;

  const addStyling = {
    width : "100%",
    height :  '100%',
    objectFit : 'contain',
  }

  Object.assign(styling.logo, addStyling);

  const img = createElement('img', styling.logo);
  img.src = path;

  Object.assign(img.style, styling.logo);

  div.append(img);

  return div
}