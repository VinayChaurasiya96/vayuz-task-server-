const { json } = require("express");
const express = require("express");
var cors = require('cors')
const mongoose = require("mongoose");
const userRouter = require('./routes/userRouter.js');

//initialization app
const app = express();
require("dotenv").config();

//middleware
app.use(express.json());
app.use(cors());


//connection
mongoose.set('strictQuery', true)
mongoose.connect(process.env.MONGO_URL, (err, client) => {
  if (err) {
    console.log("err");
    console.log(err);
  } else {
    console.log("Connection Established !!");

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  }
});

//routes
app.use("/admin/v1/user",userRouter)

