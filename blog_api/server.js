const http = require('http')

const app = require('./app')

const mongoose= require('mongoose')

const port = process.env.PORT||3000;

const server = http.createServer(app);
require('dotenv').config();

server.listen(port,()=>{
    console.log('app is running on port '+ port)
})