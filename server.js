require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
// const methodOverride = require('method-override');
const carInformationController = require('./controllers/cars')

const cors = require('cors');
const morgan = require('morgan')

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send("hello EV world");
})

app.use('/top-evs-2023', carInformationController);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));