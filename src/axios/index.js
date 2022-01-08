import axois from "axios";

const baseurl = "https://fms-backend-v1.herokuapp.com/api/v1/";

const axios = axois.create({
  baseURL: baseurl,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("fms-jwt")}`,
  },
});

export default axios;
