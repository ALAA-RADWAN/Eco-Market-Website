"use strict";

/**
 DOMContentLoaded 
 */
document.addEventListener("DOMContentLoaded", () => {
  const currentLink = document.querySelector('#nav_menu a.current');
  if (currentLink) {
    currentLink.addEventListener('focus', () => currentLink.style.outline = '2px solid #866b26ff');
  }

  // Print button handler (events page)
  const printBtn = document.getElementById("printButton");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }
});




