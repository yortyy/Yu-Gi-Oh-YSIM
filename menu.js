"use strict";
(function() {
  let selectedDeck;



    window.addEventListener("load", init);

    function init() {
        id("enterYSIM-btn").addEventListener("click", enterYSIMbtn);
        let decks = qsa(".deck-card");
        for(let i = 0; i < decks.length; i++) {
            decks[i].addEventListener("click", (e) =>
                {
                    clearSelections(decks);
                    let clicked = e.target;
                    while(clicked.classList != "deck-card") {
                      clicked = clicked.parentNode;
                    }
                    clicked.classList.add("deck-selected");
                    selectedDeck = clicked.id;
                }
            );
        }
    }

    function clearSelections(decks) {
        for(let i = 0; i < decks.length; i++) {
            decks[i].classList.remove("deck-selected");
        }
    }

    function enterYSIMbtn() {
        console.log(selectedDeck);
    }


  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns a generated element using the given tag.
   * @param {string} tagName - tagName.
   * @returns {object} - DOM object associated with tag.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
  /**
   * Checks the given fetched possible JSON object. Returns it back if it's ok to be used,
   * otherwise calls an error.
   * @param {string} res - fetched possible JSON object.
   * @returns {string} - the same possible JSON object, checked to work.
   */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns a list of all elements that match the specified selector.
   * @param {string} selector - CSS query selector.
   * @returns {NodeList} A NodeList containing all elements with the associated selector.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
})();