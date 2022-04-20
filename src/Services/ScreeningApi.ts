import axios from "axios";

const accessToken = process.env.REACT_APP_TRADE_ACCESS_TOKEN || "";

export function getScreening(name: string, countries: string, fuzzy: string) {
  return axios({
    method: "get",
    url: "https://data.trade.gov/consolidated_screening_list/v1/search",
    responseType: "json",
    headers: {
      "Cache-Control": "no-cache",
      "subscription-key": `${accessToken}`,
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

export function signUp(
  first_name: string,
  last_name: string,
  email: string,
  password: string
) {
  return axios
    .post(`http://localhost:3000/signup`, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    })
    .then((response) => response.data);
}

export function logIn(email: string, password: string) {
  return axios
    .post(`http://localhost:3000/login`, {
      email: email,
      password: password,
    })
    .then((response) => response.data);
}

export function fetchUser(id: number) {
  return axios
    .get(`http://localhost:3000/users/${id}`, {})
    .then((response) => response.data);
}
