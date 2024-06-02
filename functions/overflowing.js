export const isOverflowing = (div, paddingX, paddingY) => {
  return ((div.scrollHeight - (paddingY | 0)) > div.clientHeight) || ((div.scrollWidth - (paddingX - 0)) > div.clientWidth)
}

export const changeDivs = (currPage, nextPage) => {
  const lastDiv = currPage.lastChild;
  currPage.removeChild(lastDiv);
  if (!nextPage) return;
  nextPage.prepend(lastDiv);
}