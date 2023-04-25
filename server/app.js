const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

const imgRouter = require("./routes/imgRouter");


app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect("mongodb://localhost:27017/task").then(()=>{
    console.log("mongoose connected");  
})

app.use("/", imgRouter);

const port=3002

app.listen(port,()=>{
    console.log("port connected");
})