const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://sagar:aakash@ds115749.mlab.com:15749/screenworks-test';

var dbIns = false;

var dbb;

app.use(bodyParser.urlencoded({extended: true}));

//Initialising the server
const PORT = process.env.PORT || 3000;

//Handling the root get req.
app.get('/',(req,res,next) => {
  res.sendFile(__dirname + '/index.html');
});

MongoClient.connect(url, (err,client) => {
  console.log(`Connected to ${url}`);
  if(err) { console.log(err); }

  db = client.db('screenworks-test');

  app.listen(3000, () => {
    console.log(`Server listening on ${PORT}`);
  });
});

app.post('/links', (req,res) => {
  db.collection('links').save(req.body,(err,result) => {
    if(err) console.log(err);

    console.log(`Link ${req.body.link} added`);
    res.redirect('/');
  })
});
