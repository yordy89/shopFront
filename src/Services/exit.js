const exit = (history) => {
  try {
    localStorage.removeItem("rol");
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export default exit;
