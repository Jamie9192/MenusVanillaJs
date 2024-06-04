import { createElement } from '../functions/elementCreate.js';

export const Page = (layout, styling, parent) => {
  styling.page.width = layout.width;
  styling.page.height = layout.height;
  const div = createElement('div', styling.page, 'page');
  parent.append(div);
  return div;
}