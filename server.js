var express = require('express');
var app = express();

var options = {
  index: "index.html"
};

app.use(express.static(__dirname + '/html',options));

app.listen(process.env.PORT || 3000);
