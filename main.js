const canvas = document.querySelector("canvas"); // Grab canvas from DOM
const ctx = canvas.getContext("2d"); // Get context to access 2D canvas functions
const game = new Game(canvas);

window.addEventListener("load", game.start());
