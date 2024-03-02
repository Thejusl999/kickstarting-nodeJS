/*
DELIVERABLE=>
1) Create a server , run it on port 4000 and console log your name.
2) Call the server from the browser and your name would get printed.
*/
const http=require('http');
const server=http.createServer((res,req)=>console.log('Thejus L'));
server.listen(4000);