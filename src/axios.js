import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-ee6fa.cloudfunctions.net/api", //API (Cloud function) URL
  // http://localhost:5001/clone-ee6fa/us-central1/api
});

export default instance;
