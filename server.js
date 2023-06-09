require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const carInformationController = require('./controllers/cars')
const tripPlannerInformationController = require('./controllers/trips')
const contactController = require('./controllers/contact');

const cors = require('cors');
const morgan = require('morgan')

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send("hello EV world");
})

app.use('/top-evs-2023', carInformationController);
app.use('/trip-planner', tripPlannerInformationController);
app.use('/contact', contactController);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));