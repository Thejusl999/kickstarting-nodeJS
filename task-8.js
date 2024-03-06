/*
PROJECT=>
1)  I want you to read all the messages from the file and show it at the top of the form.
2)  Everytime you add a new message it should show at the top of the form.
*/
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
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
})
server.listen(3000);