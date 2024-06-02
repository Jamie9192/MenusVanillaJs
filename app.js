const business = "Vinos";

import {Pages} from './components/Pages.js';
import {Page} from './components/Page.js';
import {Category} from './components/Category.js';

import { isOverflowing, changeDivs } from './functions/overflowing.js';


const LoadMenu = (restaurant) => {

  const {layout, styling, menu} = restaurant;
  const {pages, columns} = layout;

  const pagesContainer = Pages(layout, styling, document.body);
  const pageArray = [];
  let currentPage = 0;
  for (let i = 0; i < pages; i++) {
    const page = Page(styling, pagesContainer)
    pageArray.push(page)
  }

  Object.entries(menu).forEach(([category, data], index) => {
    const currPage = pageArray[currentPage]
    const categoryDiv = Category(category, data, styling, layout, currPage)
    const pageCS = window.getComputedStyle(currPage)
    const pagePadding = parseInt(pageCS.padding) * 2
    const gap = parseInt(pageCS.gap) * 2

    if (isOverflowing(currPage, pagePadding + gap, pagePadding + gap)) {
      currentPage++
      if (pageArray[currentPage]) {
        changeDivs(currPage, pageArray[currentPage])
      }
    }
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