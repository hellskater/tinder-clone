import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinderrr-clone-backend.herokuapp.com/",
});

export default instance;
