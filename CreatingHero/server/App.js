const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const characterModel = require('./models/Character')
const bodyParser = require("body-parser");
const apiRoute = require('./Routers/apiRoute')

const app = express();

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/biography')
.then((result)=>app.listen(3001 , ()=>{
    console.log('Server Running');
}))
.catch(err=>console.log(err))

app.use('/api',apiRoute);
