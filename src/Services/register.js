import axios from "axios";
import { baseUrl } from "config";

const registerService = (values, history) => {
  return axios
    .post(`${baseUrl}/register`, values)
    .then((res) => {
      if (res.data) {
        history.push("/login");
      }
    })
    .catch((e) => console.log(e));
};

export default registerService;
