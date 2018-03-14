const express = require('express');
const app = express();

//Initialising the server
const PORT = process.env.PORT || 8080

app.listen(8080, () => {
  console.log('Server listening on 8080 ${PORT}');
});

//Handling the root get req.
app.get('/',(req,res,next) => {
  res.sendFile(__dirname + '/index.html');
});
//manish trail