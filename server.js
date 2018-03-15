const express = require('express');
const app = express();

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/TestDB';

//Initialising the server
const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Server listening on ${PORT}`);
});

//Handling the root get req.
app.get('/',(req,res,next) => {
  res.sendFile(__dirname + '/index.html');
});

MongoClient.connect(url, (err,db) => {
  console.log("Connected to MongoDB Instance");
});
