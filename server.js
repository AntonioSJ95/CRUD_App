const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();
const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require("./server/database/connection")

dotenv.config({path: 'config.env'})

const PORT = process.env.PORT || 8080

//This is a log request
app.use(morgan('tiny'));

//MongoDB Connection
connectDB();

//Parse Request to body parser
app.use(bodyparser.urlencoded({extended : true}))

//Set view engine
app.set("view engine", "ejs")


//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/imgs")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))


//Load routes
app.use("/", require('./server/routes/router'))

app.listen(PORT, ()=> {console.log(`Server is running on http://localhost:${PORT}`)});