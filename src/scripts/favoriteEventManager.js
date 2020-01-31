const favoriteEventHandler = (evt) => {
  const buttonId = evt.target.id;
  const index = buttonId.split('-')[1];

  const routeDiv = document.getElementById(`routename-${index}`);
  const stopDiv = document.getElementById(`stopname-${index}`);
  const stopText = `${routeDiv.textContent.trim()}: ${stopDiv.textContent.trim()}`;
  alert(`You like\n${stopText}`);

  const busStopSection = document.getElementById(`busstop-${index}`);
  busStopSection.classList.add('favorite');
};

const favoriteEventManager = {
  addFavoriteEventListeners() {
    const buttons = document.querySelectorAll(".bus-stop__favorite");
    for (let button of buttons) {
      button.addEventListener("click", favoriteEventHandler);
    }
  },
  removeFavoriteEventListeners() {
    const buttons = document.querySelectorAll(".bus-stop__favorite");
    for (let button of buttons) {
      button.removeEventListener("click", favoriteEventHandler);
    }
  }
}

export default favoriteEventManager;