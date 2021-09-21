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
//"cd .." is to go one step back in the folder // just for note don't use that bcz ur already in the right path
//use 'npm init' in the terminal to initialise npm
//'npm -v' for npm version
//'node -v' for node version
//node index.js to view the results
//FileSystem is a inbuilt module
//"promise" is to do asynchronous operations
//"await" is to perform both as "then" and "catch"
//"readFile" just reads the content in the existing file name provided
//"appendFile" adds content to the file(if not exit it creates a file)
//"mkdir" creates the new directory
//"unlink" deletes the file
//"utf8" is just the encoding format(human readable format)
//try catch is just to handle the error if that folder already exit and its not mandatory
//************************************************************************************************************************************************/
//http is a protocol
//refresh the local host to view the result
//.createServer creates a server
//.createServer(function (request, response) is equivalent to .createServer(function (a,b)
//request has 4 parameters (header,url,body,params)
//response has the actual data
//.listen(3000) is to set the port no for local host
//ctrl+c is used to stop the server(use in terminal)
//
const http = require("http");
http
  .createServer(function (request, response) {
    console.log(request.headers); //to view its parameters
    console.log(request.url);
    console.log(request.body);
    console.log(request.params);
    //response.end(`{"food1":"pizza" , "food2":"burger"}`);// to view multiple response in a single line or go with below method
    response.write("pizza");
    response.write("burger");
    response.end(); // its absence throws an error
    console.log("hi"); //its displayed only in the terminal not in the local host bcz the response has been ended
    //refresh browser to see hi multiple times
  })
  .listen(3000);
