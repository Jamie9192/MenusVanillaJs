import { createElement } from '../functions/elementCreate.js';

export const Page = (styling, parent) => {
  const div = createElement('div', styling.page, 'page');
  parent.append(div);
  return div;
}