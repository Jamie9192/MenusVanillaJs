const icons = {
  vegetarian: { icon: '🍃' },
  vegan: { icon: '🌱' },
  containsNuts: { icon: '🥜' },
  glutenFree: { icon: '🌾' },
  dairyFree: { icon: '🥛' },
}

export const Dietary = (dietary, styling) => {
  const div = document.createElement('div');
  div.classList.add('dietary');
  Object.assign(div.style, styling.dietary);

  if (!dietary) return div;

  Object.entries(icons).forEach(([key, value]) => {
    console.log(key, value)
    if (dietary[key]) {
      const span = document.createElement('span');
      span.textContent = value.icon;
      span.style.fontSize = '1.5em';
      span.style.marginRight = '0.5em';
      div.append(span);
    }
  })



  return div;
}