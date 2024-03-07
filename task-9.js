/*
DELIVERABLES=>
1)  I want you to read all the messages from the file and show it at the top of the form.
2)  Everytime you add a new message it should show at the top of the form.
*/
const http=require('http');
// CORRESPONDING WAYS TO IMPORT FOR THE 3 WAYS OF EXPORTING USED
// 1. As a function
// const reqHandler=require('./cleanup');

// 2. As an object
/* const reqHandler=require('./cleanup');
console.log(reqHandler.someText); */

// 3. Using a common module.exports and .___ for multiple exports
const reqHandler=require('./cleanup');
console.log(reqHandler.someText);

const server=http.createServer(reqHandler);
server.listen(3000);