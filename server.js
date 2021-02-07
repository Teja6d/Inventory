<<<<<<< HEAD
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
=======

const express = require('express');
const path = require('path');
//const app = express()
const port = process.env.PORT || 4000;
const cors = require('cors');
const jsonServer = require('json-server');
//const { request } = require('http');
//const { response } = require('express');
// app.use(express.static(__dirname))
//  app.use(express.static(path.join(__dirname,'build')))
//  app.get('/',function(req,res){
//      res.sendFile(path.join(__dirname,'build','index.html'))
//  })
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.use(cors())
server.use("/db",middlewares,router)
server.use(express.static(path.join(__dirname,'build')));
server.get('/*',function(req,res){
    res.sendFile(path.join(__dirname,'build','index.html'));
})
>>>>>>> 8887cfa0a08acd76b289503259a4c9e4c74bda22
server.listen(port,()=>{
    console.log(`json server is running at ${port}`)
})  