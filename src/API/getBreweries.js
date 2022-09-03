import axios from "axios";

export default function getBreweries(req, res) {
  axios
    .get(
      `https://api.openbrewerydb.org/breweries?by_city=${req.query.city}&per_page=10`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
}
