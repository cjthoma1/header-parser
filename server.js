var express = require("express"),
app = express(),
port = process.env.PORT || '8080';
app.enable('trust proxy');
app.use((req, res) => {

var headerObj = {
    ip:  req.ip,
    Language: req.headers["accept-language"],
    OS: req.headers["user-agent"]
}
    
res.send(headerObj);
})

app.listen(port, () => {
    console.log("Listening on port "+port);
})