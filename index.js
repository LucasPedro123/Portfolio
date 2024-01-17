const express = require('express');
const server = express(3000);

server.get('/', (req, res)=>{
    return res.json({mensage:"API"})
});

server.listen(3000, ()=>{
    console.log("Foi!")
})