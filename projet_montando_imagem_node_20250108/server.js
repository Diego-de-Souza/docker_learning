const http = require('node:http');
const hostname = '0.0.0.0';
const hostname_externo = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Configurações da resposta
  res.statusCode = 200; // HTTP 200 OK
  res.setHeader('Content-Type', 'text/plain');
  
  // Conteúdo da resposta
  res.end('Olá, mundo! Servidor rodando em Node.js');
});

// Iniciar o servidor
server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname_externo}:${port}/`);
});
