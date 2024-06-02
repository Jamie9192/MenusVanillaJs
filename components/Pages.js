export const Pages = (layout, styling, parent) => {
  const div = document.createElement('div');
  Object.assign(div.style, styling.pages);
  div.classList.add('pages');
  div.style = {
    display : 'grid',
    gridTemplateColumns : `repeat(${layout.columns}, 210mm)`,
    gridTemplateRows : `repeat(${Math.ceil(layout.pages/layout.columns)}, 297mm)`,
    gap : '1em',
    width : '100%',
    height : '100%',
  }
  parent.append(div)
  return div;
}