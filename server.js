var express = require("express"),
app = express(),
port = process.env.PORT || '8080',
useragent = require('express-useragent'),
locale = require("locale");


app.enable('trust proxy');
app.use(useragent.express());
app.use((req, res) => {
// res.header("Content-Type", "text/plain")

var source = req.useragent.source,
index1 = source.indexOf("("),
index2 = source.indexOf(")")
source = source.slice(index1+1, index2)


var headerObj = {
    ipaddress:  req.ip,
    language: req.headers["accept-language"],
    software: source
}
    
res.send(headerObj);
})

app.listen(port, () => {
    console.log("Listening on port "+port);
})