const express = require('express');
const app = express();

//Initialising the server
const PORT = process.env.PORT || 3000

app.listen(3000, () => {
  console.log('Server listening on 3000 ${PORT}');
});

//Handling the root get req.
app.get('/',(req,res,next) => {
  res.sendFile(__dirname + '/index.html');
});
//manish trail