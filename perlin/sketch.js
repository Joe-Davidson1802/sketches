let angle = 0;
const angleInc = 0.005;
const inc2D = 0.005;
let s;
let s2;

function setup() {
  createCanvas(500, 500);
  s = createSlider(0, 8, 1);
  s2 = createSlider(0, 1, 0.01);
}
function HSVtoRGB(h, s, v) {
  var r, g, b, i, f, p, q, t;
  if (arguments.length === 1) {
    (s = h.s), (v = h.v), (h = h.h);
  }
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      (r = v), (g = t), (b = p);
      break;
    case 1:
      (r = q), (g = v), (b = p);
      break;
    case 2:
      (r = p), (g = v), (b = t);
      break;
    case 3:
      (r = p), (g = q), (b = v);
      break;
    case 4:
      (r = t), (g = p), (b = v);
      break;
    case 5:
      (r = v), (g = p), (b = q);
      break;
  }
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255,
  };
}

function draw() {
  noiseDetail(s.value(), s2.value());
  loadPixels();
  let xOff = 0;
  for (let x = 0; x < width; x += 1) {
    let yOff = 0;
    for (let y = 0; y < width; y += 1) {
      const randomColor = noise(xOff, yOff, angle) * 255;
      const rgb = HSVtoRGB(randomColor, 255, 255);
      const index = (x + y * width) * 4;
      pixels[index + 0] = rgb.r;
      pixels[index + 1] = rgb.g;
      pixels[index + 2] = rgb.b;
      pixels[index + 3] = 255;
      yOff += inc2D;
    }
    xOff += inc2D;
  }
  updatePixels();

  angle += angleInc;
}
