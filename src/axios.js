import axios from "axios";

const instance = axios.create({
  // THEAPI (cloud function) URL
  baseURL: "",
});

export default instance;
