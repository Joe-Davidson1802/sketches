let center;
let time = 0;
let stars = [];
let starcount = 30;

function setup() {
  createCanvas(500, 500);
  center = createVector(width / 2, height / 2);
}

function draw() {
  background(0);
  if (stars.length < starcount) {
    stars.unshift(new Star());
  }
  stars = stars.filter(
    (star) =>
      !(
        star.pos.x > width ||
        star.pos.x < 0 ||
        star.pos.y > height ||
        star.pos.y < 0
      )
  );
  for (let i = 0; i < stars.length; i++) {
    stars[i].move();
    stars[i].show();
  }
  time += 0.01;
}
