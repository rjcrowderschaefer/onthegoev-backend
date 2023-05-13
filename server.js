require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
// const methodOverride = require('method-override');
const carInformationController = require('./controllers/cars')

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello EV world");
})

app.use('/cars', carInformationController);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));