// //global objects of node js
// //node index.js outputs the following in the terminal itself irrespective of the brower bcz od node.js
// console.log(__dirname); //output:C:\Users\Aishwarya\node practice
// console.log(__filename); //output:C:\Users\Aishwarya\node practice\index.js
// module.exports = somefunction();
// function somefunction() {
//   console.log("hello"); //output:hello
// }
//************************************************************************************* */
//File Systems
//use 'npm init' in the terminal to initialise npm
//'npm -v' for npm version
//'node -v' for node version
//node index.js to view the results
//"promise" is to do asynchronous operations
//"await" is to perform both as "then" and "catch"
//"readFile" just reads the content in the existing file name provided
//"appendFile" adds content to the file(if not exit it creates a file)
//"mkdir" creates the new directory
//"unlink" deletes the file
//"utf8" is just the encoding format(human readable format)
//try catch is just to handle the error if that folder already exit and its not mandatory
const fs = require("fs/promises");
async function FileSystem() {
  const file = await fs.readFile("./demo.txt", "utf8");
  console.log(file);
  await fs.appendFile("./world.txt", "helloworld");
  await fs.unlink("./world.txt");
  try {
    await fs.mkdir("worldfolder");
  } catch {}
  await fs.appendFile("./worldfolder/world", "hello content in new folder");
  await fs.writeFile("./blank.txt", "bkjdgft \n kdhvbks \t gajd");
}
FileSystem();
