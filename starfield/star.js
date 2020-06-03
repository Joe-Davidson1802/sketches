class Star {
  constructor() {
    let x = random(width);
    let y = random(height);
    this.pos = createVector(x, y);
  }

  show() {
    fill(255);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 5);
    strokeWeight(2);
    let dir = this.pos.copy();
    dir.sub(center).normalize();
    dir.mult(80);
    let trail = this.pos.copy().sub(dir);
    line(this.pos.x, this.pos.y, trail.x, trail.y);
  }
  move() {
    let dir = this.pos.copy();
    dir.sub(center);
    dir.normalize();
    dir.mult(5);
    this.pos.add(dir);
  }
}
