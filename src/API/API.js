import axios from "axios";

export const placeholderAPI = (route) => {
  const data = axios
    .get(`https://jsonplaceholder.typicode.com/${route}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};
