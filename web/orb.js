class Orb {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.disabled = false;
    this.d = random(10, 50);
    this.offsetY = random(100);
    this.offsetX = random(100);
    this.speed = 5;
  }

  update() {
    if (this.disabled) return;
    
    
    this.pos.x += (noise(this.offsetX) -.5) *this.speed;
    this.pos.y += (noise(this.offsetY)-.5) *this.speed;
    this.offsetY+=0.01;
    this.offsetX+=0.01;
    
    
    
    if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.x > height) {
     this.disabled = true; 
    }
  }

  draw() {
    if (this.disabled) return;
    noStroke();
    fill(255);
    circle(this.pos.x, this.pos.y, this.d);
  }
}