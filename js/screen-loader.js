// loading-wrapper class
const screenLoader = document.querySelector(".loading-wrapper");

// When screen finished loading
window.onload = () => {
    screenLoader.classList.add("loaded");

    if (window.innerWidth < 415) {
        fontIconResize()
    }
}

// Runs after the transition finished playing
screenLoader.addEventListener("transitionend", function () {
    screenLoader.classList.add("loaded-fin");
})