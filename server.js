const express = require('express');
const app = express();

//Initialising the server --Sagar

//Zzz, Dun remember how to initialse on the environment's port
//I'll do it in the later commits

app.listen(3000, () => {
  console.log("Server listening on 3000");
});

//Handling the root get req.
app.get('/',(req,res,next) => {
  res.sendFile(__dirname + '/index.html');
});
