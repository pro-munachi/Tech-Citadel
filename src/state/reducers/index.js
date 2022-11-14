import { combineReducers } from "redux";
import { dashboardReducer } from "./dashboard";
import { userLoginReducer } from "./login";
import subjectReducer from "./subjects";

const reducers = combineReducers({
  subjects: subjectReducer,
  login: userLoginReducer,
  dashboard: dashboardReducer,
});

export default reducers;
