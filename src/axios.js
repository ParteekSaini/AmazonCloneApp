import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-ee6fa/us-central1/api", //API (Cloud function) URL
});

export default instance;
