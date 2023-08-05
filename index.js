const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const uploadController = require("./controllers/uploadController");

//connect to mongodb database
async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB successfully!');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
    }
  }
  
connectToDatabase();

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/images', express.static('public/images'));
app.use("/auth", authController);
app.use("/product", productController);
app.use('/upload', uploadController)

app.get('/',(req,res)=>{
    res.json("ecommerce backend")
})

app.listen(process.env.PORT, ()=>console.log('Server has started'))
