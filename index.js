const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

mongoose.connect(process.env.MONGO_URL,()=>console.log('MongoDb is connected'))


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/auth", authController);
app.use('/upload', uploadController)

app.listen(process.env.PORT, ()=>console.log('Server has started'))