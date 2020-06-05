const maxIter = 40;
const minRe = -2.0;
const maxRe = 1.0;
const minIm = -1.2;
let maxIm;
let reFactor;
let imFactor;

function setup() {
  createCanvas(800, 800);
  maxIm = minIm + ((maxRe - minRe) * height) / width;
  reFactor = (maxRe - minRe) / (width - 1);
  imFactor = (maxIm - minIm) / (height - 1);
}

function draw() {
  loadPixels();
  for (let y = 0; y < height; y++) {
    let c_im = maxIm - y * imFactor;
    for (let x = 0; x < width; x++) {
      let c_re = minRe + x * reFactor;

      let Z_re = c_re,
        Z_im = c_im; // Set Z = c
      let isInside = true;
      for (let n = 0; n < maxIter; n++) {
        let Z_re2 = Z_re * Z_re,
          Z_im2 = Z_im * Z_im;
        if (Z_re * Z_re + Z_im * Z_im > 4) {
          isInside = false;
          break;
        }
        Z_im = 2 * Z_re * Z_im + c_im;
        Z_re = Z_re2 - Z_im2 + c_re;
      }
      let val;
      if (isInside) {
        val = 0;
      } else {
        val = 255;
      }
      let index = x + y * width * 4;
      pixels[index + 0] = val;
      pixels[index + 1] = val;
      pixels[index + 2] = val;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}
