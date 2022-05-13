import axios from "axios";

const accessToken = process.env.REACT_APP_TRADE_ACCESS_TOKEN || "";

export function getScreening(name: string, countries: string, fuzzy: string) {
  let params = {
    ...(name !== "" && { name: name }),
    ...(countries !== "" && { countries: countries }),
    ...(fuzzy === "true" && { fuzzy_name: fuzzy }),
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
    .post(`https://screening-back.vercel.app/signup`, {
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
    .post(`https://screening-back.vercel.app/matchreview`, review)
    .then((response) => response.data)
    .catch((error) => console.log(error.response.data));
}

export function postNomatch(searched_name: string, user_id: number) {
  let nomatch = {
    ...(searched_name !== "" && { searched_name: searched_name }),
    ...{ user_id: user_id },
  };
  return axios
    .post(`https://screening-back.vercel.app/nomatch`, nomatch)
    .then((response) => response.data)
    .catch((error) => console.log(error.response.data));
}

export function logIn(email: string, password: string) {
  return axios
    .post(`https://screening-back.vercel.app/login`, {
      email: email,
      password: password,
    })
    .then((response) => response.data);
}

export function fetchUser(id: number) {
  return axios
    .get(`https://screening-back.vercel.app/users/${id}`, {})
    .then((response) => response.data);
}

export function fetchMatchReviews(id: number) {
  return axios
    .get(`https://screening-back.vercel.app/matchreview/${id}`, {})
    .then((response) => response.data);
}

export function fetchNoMatches(id: number) {
  return axios
    .get(`https://screening-back.vercel.app/nomatch/${id}`, {})
    .then((response) => response.data);
}

export function deleteMatchReview(id: number) {
  return axios
    .delete(`https://screening-back.vercel.app/matchreview/${id}`, {})
    .then((response) => response.data);
}

export function deleteEmptyMatch(id: number) {
  return axios
    .delete(`https://screening-back.vercel.app/nomatch/${id}`, {})
    .then((response) => response.data);
}

// need to add put for editing match reviews and empty matches
