import axios from "axios";

const accessToken = process.env.REACT_APP_TRADE_ACCESS_TOKEN || "";

export function getScreening(name: string, countries: string, fuzzy: string) {
  let params = {
    ...(name !== "" && { name: name }),
    ...(countries !== "" && { countries: countries }),
    ...(fuzzy === "true" && { fuzzy_name: fuzzy }),
    ...{ size: 2 },
  };
  return axios({
    method: "get",
    url: "https://data.trade.gov/consolidated_screening_list/v1/search",
    responseType: "json",
    headers: {
      "Cache-Control": "no-cache",
      "subscription-key": `${accessToken}`,
    },
    params: params,
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
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export function postReview(
  list_id: string,
  searched_name: string,
  matched_name: string,
  score: number,
  positive_match: boolean,
  review_comments: string,
  user_id: number
) {
  let review = {
    ...(list_id !== "" && { list_id: list_id }),
    ...(searched_name !== "" && { searched_name: searched_name }),
    ...(matched_name !== "" && { matched_name: matched_name }),
    ...{ score: score },
    ...{ positive_match: positive_match },
    ...(review_comments !== "" && { review_comments: review_comments }),
    ...{ user_id: user_id },
  };
  return axios
    .post(`http://localhost:3000/matchreview`, review)
    .then((response) => response.data)
    .catch((error) => console.log(error.response.data));
}

export function postNomatch(searched_name: string, user_id: number) {
  let nomatch = {
    ...(searched_name !== "" && { searched_name: searched_name }),
    ...{ user_id: user_id },
  };
  return axios
    .post(`http://localhost:3000/nomatch`, nomatch)
    .then((response) => response.data)
    .catch((error) => console.log(error.response.data));
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

export function fetchMatchReviews(id: number) {
  return axios
    .get(`http://localhost:3000/matchreview/${id}`, {})
    .then((response) => response.data);
}

export function fetchNoMatches(id: number) {
  return axios
    .get(`http://localhost:3000/nomatch/${id}`, {})
    .then((response) => response.data);
}
