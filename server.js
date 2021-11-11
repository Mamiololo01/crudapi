const express      = require('express');
const MongoClient  = require('mongodb').MongoClient;
const bodyparser   = require('body-parser');
const db           = require('./config/db');

const app          = express();

const port = 8000;

app.use(bodyparser.urlencoded({ extended: true }))

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    require('./app/routes/note_routes')(app, database);
app.listen(port, () => {
    console.log(" We are live on " + port);
})

})