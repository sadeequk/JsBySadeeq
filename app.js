// Event Loop?
// The event loop is what allows Node.js to perform non-blocking I/O operations — despite the
//  fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.
const fs = require("fs");
console.log(`started a first task`);
//check file   path
fs.readFile("./sadeeq/text.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first weak");
});
console.log("completed next weak");
