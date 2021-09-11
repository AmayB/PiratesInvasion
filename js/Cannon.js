class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImg = loadImage("assets/canon.png");
    this.cannonBase = loadImage("assets/cannonBase.png")
  }

  display() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    rotate(this.angle);
    image(this.cannonImg, 0, 0, this.width, this.height);
    pop();
    image(this.cannonBase, cannon.x - 40, cannon.y - 50, this.width, this.height);
    noFill();
  }
  
}
