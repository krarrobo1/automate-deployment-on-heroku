const express = require('express');

const app = express();
const port = process.env.PORT || 9000;

app.get('/:name', (req, res) => {
    let { name } = req.params;
    res.send(`Hello ${name}`);
});

app.listen(port);
console.log("Server started at port " + port);