import axios from "axios";

const apiKey1 = process.env.api_key_1 || "";
const apiKey2 = process.env.api_key_2 || "";

export function getScreening(name: string, countries: string, fuzzy: string) {
  return axios({
    method: "get",
    url: "https://data.trade.gov/consolidated_screening_list/v1/search",
    responseType: "json",
    headers: {
      "Cache-Control": "no-cache",
      "subscription-key": "9f9e9a19de4a418485ea17ddcb79d3a7",
    },
    params: {
      name: name,
      countries: countries,
      fuzzy_name: fuzzy,
    },
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
}
