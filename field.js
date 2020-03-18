class Field {
  constructor(game) {
    this.ctx = game.ctx;
    this.radius = canvas.width / 3;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = "rgb(236, 231, 231)";
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.closePath();
  }
}
