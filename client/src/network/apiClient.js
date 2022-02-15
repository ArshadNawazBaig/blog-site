import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `http://localhost:4000/api`,
  headers: {
    Accept: "application/json",
    'Content-Type': 'application/json; charset=utf-8'
  },
});

// axiosClient.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     let res = error.response;
//     if (res.status == 401) {
//       window.location.href = "https://example.com/login";
//     }
//     console.error("Looks like there was a problem. Status Code: " + res.status);
//     return Promise.reject(error);
//   }
// );


// export default axiosClient;