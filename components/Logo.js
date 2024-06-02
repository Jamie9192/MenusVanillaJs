export const Logo = (business, str, styling) => {
  const div = document.createElement('div');
  if (!str) return div;
  div.classList.add('logo');
  Object.assign(div.style, styling.logoContainer);

  const path = `../assets/${business}/${str}`;

  console.log(path);

  const img = document.createElement('img');
  Object.assign(img.style, styling.logo);
  img.src = path;
  img.style.width = '100%';
  img.style.height = '100%';
  img.style.objectFit = 'contain';

  div.append(img);

  return div
}