const fs = require("fs");

let file = "";

fs.readdir(".", (err, dirs) => {
  for (let d of dirs) {
    if (d !== ".git") {
      file += `<a href="/sketches/${d}">${d}</a></br>`;
    }
  }
  console.log(file);
  fs.writeFile("index.html", file, () => {});
});
