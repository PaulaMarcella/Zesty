class Player {
  constructor(game) {
    this.ctx = game.ctx;
    this.x = 50;
    this.y = 50;
    this.width = 100;
    this.height = 100;
    this.image = new Image();
    this.image.src = "/assets/Grapefruit.png";
    this.rotator = 0;
    this.turning = -0.048;
    this.speedX = 0;
    this.speedY = 0;
  }

  draw() {
    this.drawRotation();
    // this.beginPath();
    // this.arc(this.x, this.y, this.radius, 0, Math.Pi * 2, false);
    // this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  drawRotation() {
    this.ctx.save();
    this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    this.ctx.rotate(this.rotator);
    this.ctx.drawImage(
      this.image,
      (this.width / 2) * -1,
      (this.height / 2) * -1,
      this.width,
      this.height
    );
    this.ctx.restore();
  }

  turn() {
    this.rotator += this.turning;
  }

  setControls() {
    window.addEventListener("keydown", event => {
      if (event.keyCode === 77) {
        if (this.x) this.speedX = 1.5;
        this.speedY = 1.5;
        console.log(this.facing);
        if (this.turning !== 0.048) {
          this.turning = 0.048;
        } else {
          this.turning = -0.048;
        }
      }
    });

    window.addEventListener("keyup", () => {
      this.speedX = 0;
      this.speedY = 0;
    });
  }

  update() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.drawRotation();
    if (this.rotator > 6 || this.rotator < -6) {
      this.rotator = 1.5707963267948966;
    }

    this.turn(0.048);
    this.x += this.speedX;
    this.y += this.speedY;
  }
}
