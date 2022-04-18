import axios from "axios";

export function getScreening(name: string, countries: string) {
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
    },
  })
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

// trade gov api subscription-key 9f9e9a19de4a418485ea17ddcb79d3a7 (primary)
// 58ec51a24b004c6db1163cce7f2917e6 (secondary)

// Business Service Providers Authorization : Bearer bcf9f685-7127-3522-9a56-da9be40b7795
