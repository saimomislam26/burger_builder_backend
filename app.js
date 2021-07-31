const express = require('express');
const cors = require('cors');
const userRouter = require('./Router/userRouter');


const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', userRouter);

module.exports = app;