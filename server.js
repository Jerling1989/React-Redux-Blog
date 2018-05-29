// REQUIRE NPM PACKAGES
const express = require('express');
const path = require('path');
// SET PORT VARIABLE
const port = process.env.PORT || 8080;
// SET APP EXPRESS VARIABLE
const app = express();
// CREATE STATIC PATH FOR EXPRESS
app.use(express.static(__dirname));
// ROUTE TO INDEX
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
});
// PORT LISTENER
app.listen(port);
console.log(`Started on port: ${port}`);