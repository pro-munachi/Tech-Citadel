import { combineReducers } from "redux";
import { userLoginReducer } from "./login";
import subjectReducer from "./subjects";

const reducers = combineReducers({
  subjects: subjectReducer,
  login: userLoginReducer,
});

export default reducers;
