import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000
});

instance.interceptors.response.use(
  async function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(response);
    const { data } = await response;
    return data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
