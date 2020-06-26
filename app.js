require("dotenv").config();
var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require('body-parser')
var app = express()
var logger = require("morgan");
const mongoose = require('mongoose')
var port = process.env.PORT || 5000
var cors = require('cors');

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const mongoURI = 'mongodb://localhost:27017/meeting-booking'

mongoose
  .connect(
    mongoURI,
    { useUnifiedTopology: true,useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')

app.use('/users', Users)
app.use("/availability", require("./routes/availabilityRoute"));
app.use("/reserve", require("./routes/reservationRoute"));

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})

module.exports = app;
