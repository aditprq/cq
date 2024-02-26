const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
console.log("Server is running");

if(req.url === '/'){

    const data = fs.readFileSync('./Public/home.html','utf-8');
    res.end(data);
}
if(req.url === '/style.css'){
    const data = fs.readFileSync('./Public/style.css','utf-8');
    res.end(data);
}
if(req.url === '/bajrang.jpg'){
    const data = fs.readFileSync('./Public/bajrang.jpg');
    res.end(data);
}
}) 
try{
    server.listen(3001);
} catch (error) {
    console.log(error);
}

