//global objects of node js
//node index.js outputs the following in the terminal itself irrespective of the brower bcz od node.js
console.log(__dirname); //output:C:\Users\Aishwarya\node practice
console.log(__filename); //output:C:\Users\Aishwarya\node practice\index.js
module.exports = somefunction();
function somefunction() {
  console.log("hello"); //output:hello
}
