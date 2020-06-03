let angle = 0;
const angleInc = 0.005;
const inc2D = 0.005;
let s;
let s2;

function setup() {
  createCanvas(500, 500);
  s = createSlider(0, 1, 0.1);
  s2 = createSlider(0, 100, 0.1);
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function draw() {
  noiseDetail(s.value(), s2.value());
  loadPixels();
  let xOff = 0;
  for (let x = 0; x < width; x += 1) {
    let yOff = 0;
    for (let y = 0; y < width; y += 1) {
      const randomColor =
        "#" +
        (0x1000000 + noise(xOff, yOff, angle) * 0xffffff)
          .toString(16)
          .substr(1, 6);
      const rgb = hexToRgb(randomColor);
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
