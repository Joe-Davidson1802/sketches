let points = [];
const max = 10;
function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  points.push(new SeedPoint(createVector(width / 2, height / 2)));
  background(0);
}

function draw() {
  points
    .filter((x) => !x.frozen)
    .forEach((p) => {
      while (!p.frozen) {
        p.update();
        p.checkTouching(points);
      }
      p.draw();
    });
  while (points.filter((x) => !x.frozen).length < max) {
    points.push(new SeedPoint());
  }
}
