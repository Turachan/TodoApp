var express = require('express');

//Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
  if (req.headers['X-Forwarded-Proto'] === 'https') {
    res.redirect('http://' + req.hostname +":"+PORT +  req.url);
  }
  else {
    next();
  }
});

// app.get(/\/register$/, function(req, res, next){
//   console.log(JSON.stringify(req.headers)); //to see all headers that heroku adds
//   if(req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] === "https") {
//     res.redirect("http://" + req.headers.host + req.url);
//   }
//   else {
//     next();
//   }
// });

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Express server is up on port '+ PORT);
});
