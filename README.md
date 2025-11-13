Per avviare un progetto express.js

1-npm init -y
2-modifico in package.json la dicitura per l'entrypoint ad app.js che devo a sua volta crearlo come file
3-installo express con npm install express
4-creo il .gitignore con rif a /node_modules
5-creo file html e collego app.js
6-in app.js scrivo:


const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", (req, res) => {
    console.log('body', req.body);
    res.send('ciao');
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})
