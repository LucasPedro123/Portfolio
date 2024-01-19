const express = require('express');
const app = express();
const data = require('./src/Data/data.json')
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api', // O caminho que você deseja redirecionar para o servidor da API
    createProxyMiddleware({
      target: 'http://localhost:8080', // O endereço do servidor da API
      changeOrigin: true,
    })
  );
};
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Substitua pelo endereço do seu aplicativo React em desenvolvimento
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.get('/', (req, res)=>{
    return res.json(data)
});

app.listen(8080, () => {
    console.log('Servidor da API rodando em http://localhost:8080');
  });