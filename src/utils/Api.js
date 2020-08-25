import axios from "axios";

const fetchJSON = (url, options = {}) => {
  return axios(url, options)
    .then(json => {
      return json.data;
    })
    .catch(error => {
      throw error;
    });
};

export default fetchJSON;
