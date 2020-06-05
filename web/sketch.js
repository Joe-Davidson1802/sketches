let orbs = [];
const population = 20;
const sensitivity = 150;

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < population; i++) {
    orbs[i] = new Orb();
  }
}

function draw() {
  background(0);

  drawLines()
  while (orbs.filter(x => !x.disabled).length < population) orbs.push(new Orb());


  for (let i = 0; i < orbs.length; i++) {
    let o = orbs[i];
    o.update();
    o.draw();
  }

  orbs = orbs.filter(x => !x.disabled)

}


function drawLines() {

  for (let i = 0; i < orbs.length; i++) {
    for (let j = 0; j < orbs.length; j++) {
      if (orbs[i].disabled || orbs[j].disabled) continue;
      let distance= orbs[i].pos.dist(orbs[j].pos);
      if (distance < sensitivity) {
        strokeWeight(3);
        stroke(map(distance, 0, sensitivity, 255, 0));
        
        line(orbs[i].pos.x, orbs[i].pos.y, orbs[j].pos.x, orbs[j].pos.y);
      }
    }
  }
}