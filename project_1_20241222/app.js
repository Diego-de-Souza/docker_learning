const http = require('http');

const hostname = '0.0.0.0';
const port = process.env.PORT;
const version = process.env.VERSION;

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Heloo world.");
})

server.listen(port, hostname,()=>{
    console.log(`Servidor rodando em http://${hostname}:${port}/ and version ${version}`);
})

process.on('SIGINT', function(){
    process.exit();
})