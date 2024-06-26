const business = "Porto";

import { calculateWidthFlex } from '../functions/calculate.js';

import { Logo } from './components/Logo.js';
import { Pages } from './components/Pages.js';
import { Page } from './components/Page.js';
import { Category } from './components/Category.js';

import { isOverflowing, changeDivs } from './functions/overflowing.js';

let currentPage = 0;
const pageArray = [];

const AddToPage = (div) => {
  if (!div) return;
  const currPage = pageArray[currentPage]
  currPage.append(div)
  const pageCS = window.getComputedStyle(currPage)
  const pagePadding = parseInt(pageCS.padding) * 2
  const gap = parseInt(pageCS.gap) * 2

  if (isOverflowing(currPage, pagePadding + gap, pagePadding + gap)) {
    currentPage++
    if (pageArray[currentPage]) {
      changeDivs(currPage, pageArray[currentPage])
    }
  }
}

const LoadMenu = (restaurant) => {

  const { layout, colorPalette, styling, menu } = restaurant;
  const { pages } = layout;

  let stlyeStr = "<style>"
  // create classes from styling keys and values
  Object.entries(styling).forEach(([key, value]) => {
    stlyeStr += `.${key} {`
    Object.entries(value).forEach(([k, v]) => {
     //need to split these by uppercase and add a -
      const split = k.split(/(?=[A-Z])/).join('-').toLowerCase()
      stlyeStr += `${split}:${v};`
    })
    stlyeStr += `}`
  })
  stlyeStr += "</style>"

  document.head.insertAdjacentHTML('beforeend', stlyeStr)

  document.documentElement.style.fontSize = layout.baseFontSize || '16px';

  if (colorPalette) {
    Object.entries(colorPalette).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--clr-${key}`, value);
    })
  }

  const pagesContainer = Pages(layout, styling, document.body);


  for (let i = 0; i < pages; i++) {
    const page = Page(layout, styling, pagesContainer)
    pageArray.push(page)
  }

  styling.layout = styling.layout || {}
  styling.layout.colElWidth = calculateWidthFlex(layout.width, styling.page.gap, layout.colsPerPage || 1)

  const logo = Logo(business, restaurant.logo, styling)
  AddToPage(logo)

  Object.entries(menu).forEach(([category, data]) => {
    AddToPage(Category(category, data, styling, layout))
  })

  for (let i = 0; i < pageArray.length; i++) {
    const page = pageArray[i]
    if (page.children.length === 0) {
      page.remove()
    }
  }

}






fetch(`./restaurants/${business}.json`)
  .then(response => response.json())
  .then(data => LoadMenu(data))
  .catch(error => console.log(error));
