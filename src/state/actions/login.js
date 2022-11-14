import data from "../../constants/data";

export const userLogin = (username, password) => {
  return (dispatch) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].username === username && data[i].password === password) {
        dispatch({
          type: "USER_LOGIN_SUCCESS",
          payload: data[i],
        });

        localStorage.setItem("userInfo", JSON.stringify(data[i]));
      } else {
        dispatch({
          type: "USER_LOGIN_FAIL",
          payload: "Invalid Username or Password",
        });
      }
    }
  };
};
