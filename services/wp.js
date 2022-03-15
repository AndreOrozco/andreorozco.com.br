import axios from "axios";
const wp = axios.create({
    baseURL: "http://orozco.test/wp-json/wp/v2/"
  });
export default wp
