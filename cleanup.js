const fs=require('fs');
const reqHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('message.txt', 'utf8', (err, data) => {
            if(err&&err.code==='ENOENT'){
                res.write('<html>');
                res.write('<head><title>Enter Message</title></head>');
                res.write('<body>'); 
                res.write('<div><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></div>');
                res.write('</body>');
                res.write('</html>');
                return res.end();
            }else{
                res.write('<html>');
                res.write('<head><title>Enter Message</title></head>');
                res.write('<body>');
                res.write('<h1>' + data + '</h1>');
                res.write('<div><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></div>');
                res.write('</body>');
                res.write('</html>');
                return res.end();
            }
        });
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message,err=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
}
// THERE ARE 3 WAYS TO EXPORT
// 1. As a function
// module.exports=reqHandler;

// 2. As an object
/* module.exports={
    handler:reqHandler,
    someText:'Some hard coded text'
}; */

// 3. Using a common module.exports and .___ for multiple exports
/* module.exports.handler=reqHandler
module.exports.someText='Some hard coded text'; */

// 4. Node JS shortcut by using only exports.___
exports.handler=reqHandler
exports.someText='Some hard coded text';