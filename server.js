var express = require("express"),
app = express(),
port = process.env.PORT || '8080';

app.use((reg, res) => {
    
    
res.end("Hello World!!");
})

app.listen(port, () => {
    console.log("Listening on port "+port);
})