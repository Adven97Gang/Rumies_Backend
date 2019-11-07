const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const userRoute = require('./src/routes/users');
const groupsRoute = require('./src/routes/groups');

const bodyParser = require('body-parser');
const cors = require('cors');

const url = process.env.DB_CONNECTION;
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use('/users', userRoute);
app.use('/groups', groupsRoute);

app.get('/', (req, res) => {
    res.send('WELCOME RUMIES DEV TEAM :D v 3.2')
})

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('connected to DB! :D'));

app.listen(port);