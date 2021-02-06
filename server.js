const express = require('express');
const path = require('path');
const app = express()
const port = process.env.PORT || 4000;
const jsonServer = require('json-server')
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname,'build')))
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(port,()=>{
    console.log(`json server is running at ${port}`)
})  