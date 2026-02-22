/*
 * Starter file 
 */
(function() {
  "use strict";

  window.addEventListener("load", init);

  /**
   * Sets up event listeners once the page loads.
   */
  function init() {
    let button = document.getElementById("encrypt-it");
    button.addEventListener("click", handleClick);
  }

  /**
   * Handles clicking the Encrypt-It button.
   */
  function handleClick() {
    console.log("Button clicked!");
  }

})();