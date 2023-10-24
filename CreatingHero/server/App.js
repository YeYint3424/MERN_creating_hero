const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const characterModel = require('./models/Character')

const app = express();

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/biography')


app.listen(3001 , ()=>{
    console.log('Server Running');
})