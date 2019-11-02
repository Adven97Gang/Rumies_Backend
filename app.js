const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const notesRoute = require('./src/routes/posts');
const userRoute = require('./src/routes/users');

const bodyParser = require('body-parser');
const cors = require('cors');

const url = process.env.DB_CONNECTION;
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use('/notes', notesRoute);
app.use('/users', userRoute);

app.get('/', (req, res) => {
    res.send('WELCOME RUMIES DEV TEAM :D v 2.3')
})

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('connected to DB! :D'));

app.listen(port);