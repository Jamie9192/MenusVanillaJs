export const Page = (styling, parent) => {
  const div = document.createElement('div');
  div.classList.add('page');
  Object.assign(div.style, styling.page);
  parent.append(div);
  return div;
}