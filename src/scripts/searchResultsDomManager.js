const searchResultsDomManager = {
  busStopFactory(busStop, index) {
    console.log("busStopFactory");

    return `
      <section id="busstop-${index}" class="bus-stop">
        <div id="routename-${index}" class="bus-stop__route-name">
          ${busStop.route_name}
        </div>
        <div id="stopname-${index}" class="bus-stop__stopname">
          ${busStop.stopname}
        </div>
        <button id="favorite-${index}" class="bus-stop__favorite">
          Favorite &#11088;
        </button>
      </section>
    `;
  },
  renderSearchResults(searchResults) {

    console.log("renderSearchResults");

    favoriteEventManager.removeFavoriteEventListeners();

    const container = document.querySelector("#search-results");
    container.innerHTML = "";

    for (let i=0; i<searchResults.length; i++) {
      const busStop = searchResults[i];
      container.innerHTML += this.busStopFactory(busStop, i);
    }

    favoriteEventManager.addFavoriteEventListeners();
  }
};