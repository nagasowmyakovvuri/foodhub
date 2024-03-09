import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import multer from 'multer';
import Items from "./public/models/Items";
import nodemailer from 'nodemailer';
import { useState } from "react";
const app = express()
app.use(cors());
app.use(express.json())
// app.use('/', (req, res, next) => {
//   // console.log("hii hello")
//   // res.send("finally im awake")
// })
/// connection start
mongoose.connect("mongodb+srv://nagasowmyakovvuri:<VPliBiXy13jnkN7b>@cluster0.b0hbrt4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() =>
    console.log("Connected to Database & Listining to localhost 6969")
  )
  .catch((err) => console.log(err));
/// connection ends
//
// multer setup
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'public/images')
  },
  filename: function (req, file, callback) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    callback(null, Date.now() + "_" + file.originalname)
  }
})

const upload = multer({ storage: storage })
// multer setup ends 


// posting starts

app.post('/additems',async(req, res, next) => {

    try{

          const itemstoadd =req.body;
          // const addedItems=[];

          // for( const item of itemstoadd )
          // {
          //   const newitem= new Items({
          //      title:item.title,
          //      quantity: item.quantity,
          //      price : item.price,

          //   });
          //   const saveditem=await newitem.save();
          //   addedItems.push(saveditem);
          // }
          const newItem = new Items({ items: itemstoadd });
          const addedItems = await newItem.save();
          res.status(201).json({ message: 'Items added successfully', data: addedItems });
        }
     catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
const savedOTPS = {};
app.post('/reqotp', (req,res,next)=>{

    // const emaill=req.body.email;
    const emaill=req.body.value;

    console.log(emaill);
    const digits = "0123456789";
    const limit = 5;
    let otp = "";
  
    for (let i = 0; i < limit; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
  
    var transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:'gowthamvv99@gmail.com',
        pass:'anid hsez mbvp wjqj'
      }
    });

    var mailOptions={
      from:'gowthamvarri99@gmail.com',
      to:emaill,
      subject:'otp for your Food payment ',
      text: 'enter this otp to proceed with your payment  '+otp
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
    res.status(500).json({ error: 'Server error' });
        // res.status(500).send("Couldn't send");

      } else {
        savedOTPS[emaill] = otp;
        console.log('Email sent: ' + info.response);
        res.status(201).json({ message: 'Items added successfully', data:"otp sent" });

        // res.send("Sent OTP");

      }
    });
})

app.post("/verify", (req, res) => {
  const otpReceived = req.body.otp;
  const email = req.body.email;
  res.send(savedOTPS[email])
  // console.log(savedOTPS[email]);
  if (savedOTPS[email] === otpReceived) {
    res.send("Verified");
    res.status(201).json({ message: 'Items added successfully', data:"otp sent" });
   
  } else {
    res.status(500).json({error: savedOTPS[email]});
  }
});

app.listen(6969);