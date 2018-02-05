const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 3001;

const app = express();

app.use(bodyParser.json());
app.use(cors());

const { getNews } = require(`${__dirname}/controllers/mainCtrl`);

app.get("/api/getNews", getNews);

app.listen(port, () => {
  console.log(`Listening on super port: ${port}`);
});

//skeleton express app for server

//install dependencies

//recording started after node server/



