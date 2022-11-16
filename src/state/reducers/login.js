export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_SUCCESS":
      return { userInfo: action.payload };
    case "USER_LOGIN_FAIL":
      return { error: action.payload };
    default:
      return state;
  }
};
