const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const postRoute = require('./routes/posts');
const bodyParser = require('body-parser');
const cors = require('cors');

const url = process.env.DB_CONNECTION;
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postRoute)

app.get('/', (req, res) => {
    res.send('WELCOME RUMIES DEV TEAM :D')
})

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('connected to DB! :D'));

app.listen(port);