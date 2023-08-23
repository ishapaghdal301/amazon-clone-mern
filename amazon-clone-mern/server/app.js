require("dotenv").config;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn")
const cookieParser = require("cookie-parser");

const Products = require("./models/productSchema");
const DefaultData = require("./defaultdata");
const cors = require("cors");


app.use(express.json());
app.use(cors());
app.use(cookieParser(""));
const router = require("./routes/router");

app.use(router);

const port = 8005;

app.listen(port,()=>{
    console.log("just testing ");
    console.log(`server is running on ${port}`);
});
