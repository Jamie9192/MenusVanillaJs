import { mm_to_px } from "./convert.js";

export const calculateWidthFlex = (pageSize, gapmm, cols) => {
  console.log(pageSize, gapmm, cols)
  const gap = mm_to_px(gapmm || 0)
  if (cols === 1) return "100%"
  const page0 = document.querySelector('.page');
  const CS = window.getComputedStyle(page0)
  const {margin, padding} = CS
  const pagePadding = parseFloat(padding)
  const pageMargin = parseInt(margin)

  const pagePX = mm_to_px(pageSize)
  console.log("pagePX", pagePX - (pagePadding * 2))
  const span = parseInt(pageSize) / cols
  console.log("SPAN", span)
  const pxwidth = mm_to_px(span)

  console.log(pxwidth, pagePadding, gap, cols)

  const calculated = pxwidth - ((pagePadding + pageMargin - (gap/cols)) * 2)




  const total = pagePadding + pageMargin
  console.log(calculated)
  return calculated + "px"

}