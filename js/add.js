  /**
   * This .js file has been created by Lukasz Sitnik - the author of webside "Starożytny Sumer" - www.starozytnysumer.pl
   */

  /**
   * google analitics
   */

  /*
 (function() {
  var cx = '007341217864062862490:oev_bc2l-fs';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
  })();

  */



  window.onload = function() {
      performance.showHeader();
      performance.insertHamburger();
      performance.toggleMenu();
      performance.displayBigImg();
      performance.galleryService();
      performance.displayAnotherWebsiteLabel();
      aside.displaySideBar();
      google.displaySearch();
  }
