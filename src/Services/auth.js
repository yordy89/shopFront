const { SignalCellularNullRounded } = require("@material-ui/icons");

const auth = (history) => {
  const rol = localStorage.getItem("rol");
  if (rol === "admin") {
    history.push("/admin");
  } else if (rol === "cliente") {
    history.push("/shop");
  } else {
    history.push("/");
  }
};

export default auth;
