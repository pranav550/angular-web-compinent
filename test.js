const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/my-web/runtime.js",
    "./dist/my-web/polyfills.js",
    "./dist/my-web/scripts.js",
    "./dist/my-web/main.js",
  ];
  await fs.ensureDir("elements");
  await concat(files, "elements/custom-element.js");
})();
