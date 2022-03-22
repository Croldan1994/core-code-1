const { urlencoded } = require('express');
const express = require('express');
const { RequestHandler } = require('./handlers/todos');
const {initializeDB} = require('./lib/db')


const App = express () ; 

App.use(express.json()) //Todo lo que venga del cliente pasara por aca,Y a todo lo pondra en JSON
App.use(express.urlencoded({extended:false}))
App.use(RequestHandler)

App.listen(3000,()=>{
  console.log("Estoy escuchando ");
  initializeDB().then(()=>{
      console.log(`Database is Ready`);
  })
})

