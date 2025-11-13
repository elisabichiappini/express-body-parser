const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", (req, res) => {
    console.log('body', req.body);
    res.send('<h1>ciao</h1>');
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})