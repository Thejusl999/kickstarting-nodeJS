/*
DELIVERABLE=>
1)  Like the youtuber return a response like "Welcome to my Node Js project". Just follow the way he writes code in 30th video.
2)  Based on the url the user hits , I want you to return custom responses.
    -When url = /home , return response ==> Welcome home
    -When url = /about, return response ==> Welcome to About Us page
    -When url =/node, return response ==> Welcome to my Node Js project
*/

// 1.
const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Second Page</title></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);

// 2.
const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My Second Page</title></head>');
    if(req.url==='/home')           // for url /home
        res.write('<body><h1>Welcome home</h1></body>');
    else if(req.url==='/about')     // for url /about
        res.write('<body><h1>Welcome to About Us page</h1></body>');
    else                            // for other urls
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    res.end();
});
server.listen(3000);
