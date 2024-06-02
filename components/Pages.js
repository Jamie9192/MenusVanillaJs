export const Pages = (layout, styling, parent) => {
  console.log(layout, styling, parent)
  const div = document.createElement('div');
  div.classList.add('pages');
  Object.assign(div.style, styling.pages);
  div.style.display = 'grid';
  div.style.gridTemplateColumns = `repeat(${layout.columns}, 210mm)`;
  div.style.gridTemplateRows = `repeat(${Math.ceil(layout.pages/layout.columns)}, 297mm)`;
  div.style.gap = '1em';
  div.style.width = '100%';
  div.style.height = '100%';
  parent.append(div)
  return div;
}