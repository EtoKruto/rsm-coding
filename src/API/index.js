import getBreweries from "./getBreweries.js";
import express from "express";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/breweries", getBreweries);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
