const dotenv = require('dotenv');
dotenv.config();//as the file is saved as .env only no need to give the path as parameter
const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log("Connect To MongoDB"))
    .catch((err) => console.log("Failed To Connect"))

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening port ${port}...`)
})