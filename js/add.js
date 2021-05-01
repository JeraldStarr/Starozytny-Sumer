/**
 * This .js file has been created by Lukasz Sitnik - 
 * the author of webside "Starożytny Sumer" - http://www.starozytnysumer.pl
 */
import performance from './modules/Performance.js';
import {init as initMenu} from './modules/Menu.js';
import asideBar from './modules/AsideBar.js';
import googleSearch from './modules/GoogleSearch.js';
import scrolls from './modules/Scroll.js';
import tracker from './modules/Tracker.js';
import label from './modules/Label.js';
import {fixUpScrolling, addTagToURLs} from './modules/Links.js';
import {initForm} from './modules/Validation.js';

window.addEventListener("load", () => {
  performance.showHeader();
  performance.insertHamburger();
  performance.toggleMenu();
  performance.displayBigImg();
  performance.galleryService();
  initMenu();
  asideBar.displaySideBar();
  googleSearch.displaySearch();
  performance.transformToMobileMenu();
  scrolls.goToSection();
  scrolls.goToUp();
  tracker.track();
  label.create();
  label.displayAnotherWebsiteLabel();
  fixUpScrolling();
  addTagToURLs();
  initForm();
}, false);