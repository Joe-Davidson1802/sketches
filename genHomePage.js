const fs = require("fs");

let file = "";

fs.readdir(".", (err, dirs) => {
  for (let d of dirs) {
    if (d !== ".git" && d !== "genHomePage.js" && d !== "CNAME") {
      file += `<a href="/${d}/index.html">${d}</a></br>`;
    }
  }
  console.log(file);
  fs.writeFile("index.html", file, () => {});
});
