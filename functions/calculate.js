export const calculateWidthFlex = (cols) => {
  if (cols === 1) return "100%"
  const page0 = document.querySelector('.page');
  const CS = window.getComputedStyle(page0)
  const {margin, padding, gap} = CS
  const pagePadding = parseInt(padding)
  const pageMargin = parseInt(margin)

  const total = pagePadding + pageMargin

  return `calc(${100/cols}% - ${total}px)`

}