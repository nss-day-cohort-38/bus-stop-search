import apiManager from './apiManager.js';
import searchResultsDomManager from './searchResultsDomManager.js';

const searchEventManager = {
  addSearchClickEventListener() {
    console.log("addSearchClickEventListener");

    const button = document.getElementById("search-btn");

    button.addEventListener("click", () => {

      console.log("button click handler");

      const input = document.getElementById("search-criteria");
      const searchCriteria = input.value;
      const searchResultPromise = apiManager.searchBusStops(searchCriteria);
      searchResultPromise.then(searchResults => {
        searchResultsDomManager.renderSearchResults(searchResults);
      });
    });
  }
}

export default searchEventManager;