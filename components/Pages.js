import { createElement } from '../functions/elementCreate.js';

export const Pages = (layout, styling, parent) => {

  const addStyling= {
    display : 'grid',
    gridTemplateColumns : `repeat(${layout.columns}, ${layout.width})`,
    gridTemplateRows : `repeat(${Math.ceil(layout.pages/layout.columns)}, ${layout.height})`,
    width : '100%',
    height : '100%',
  }

  Object.assign(styling.pages, addStyling);

  const div = createElement('div', styling.pages, "pages");

  parent.append(div)

  return div;
}