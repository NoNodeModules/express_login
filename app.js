const express = require('express')
const router = require('./router/routers')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express()
require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/mydb', 
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex:true });

app.use(router)

app.get('/', (req,res)=>{
    res.send("I am from root")
})

app.get('*', (req,res)=>{
    res.send("Provide right url")
})

const port = 5000
app.listen (port, ()=>{
    console.log(`server is running on port ${port}`)
})
