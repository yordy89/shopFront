import axios from "axios";
import { baseUrl } from "config";

const loginService = (values, history, setUserBad) => {
  return axios
    .post(`${baseUrl}/login`, values)
    .then((res) => {
      if (res.data) {
        const { rol } = res.data;
        localStorage.setItem("rol", rol);
        switch (rol) {
          case "admin":
            history.push("/admin");
            break;
          case "cliente":
            history.push("/shop");
            break;
          default:
            history.push("/");
            break;
        }
      }
    })
    .catch((e) => {
      setUserBad(true);
    });
};

export default loginService;
