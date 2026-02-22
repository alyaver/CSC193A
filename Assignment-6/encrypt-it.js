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
    let encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleClick);

    let resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  /**
   * Handles clicking the Encrypt-It button.
   */
  function handleClick() {
    console.log("Button clicked!");
  }

  function handleReset() {
    let textArea = document.getElementById("input-text");
    textArea.value = "";
  }

})();