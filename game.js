class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.field = new Field(this);
    this.player = new Player(this);
    this.player.setControls(); // calls a method of the player within the game constructor
    this.animationId;
    this.frame = 0;
  }

  start() {
    this.animation();
  }

  reset() {
    this.player = new Player(this);
    this.player.setControls();
    this.frame = 0;
    this.gameOn = true;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.field.draw();
    this.player.draw();
  }

  update() {
    this.frame++;
    this.player.update();
    this.field.draw();
  }

  animation() {
    this.draw();
    this.update();
    this.animationId = window.requestAnimationFrame(() => {
      this.animation();
    });
  }
}
