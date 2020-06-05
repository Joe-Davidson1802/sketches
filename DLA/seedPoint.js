class SeedPoint {
  constructor(pos = undefined) {
    if (pos) {
      this.pos = pos;
      this.frozen = true;
    } else {
      this.pos = createVector(random(width), random(height));
      this.frozen = false;
    }
    this.r = 4;
    this.i = 0;
  }

  update() {
    if (!this.frozen) {
      const center = createVector(width / 2, height / 2);
      let diff = center.copy().sub(this.pos);
      diff.limit(1);
      this.pos.add(diff);
    }
  }
  draw() {
    noStroke();
    fill(map(this.i, 0, width / 2, 0, 255), 255, 255);
    circle(this.pos.x, this.pos.y, this.r);
  }
  checkTouching(others) {
    others
      .filter((x) => x !== this)
      .forEach((other) => {
        if (other.pos.dist(this.pos) < this.r && other.frozen) {
          this.frozen = true;
          this.i = other.i + 4;
        }
      });
  }
}
