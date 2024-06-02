export const createElement = ( elType, styling, className) => {
  const el = document.createElement(elType);
  if (className) el.className = className;
  if (styling)Object.assign(el.style, styling);
  return el;
}