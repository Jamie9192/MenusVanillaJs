import { createElement } from '../functions/elementCreate.js';

export const Pages = (layout, styling, parent) => {

  const addStyling= {
    display : 'grid',
    gridTemplateColumns : `repeat(${layout.columns}, 210mm)`,
    gridTemplateRows : `repeat(${Math.ceil(layout.pages/layout.columns)}, 297mm)`,
    gap : '1em',
    width : '100%',
    height : '100%',
  }

  Object.assign(styling.pages, addStyling);

  const div = createElement('div', styling.pages, "pages");

  parent.append(div)

  return div;
}