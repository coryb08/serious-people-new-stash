import { combineReducers } from "redux";
import events from "./events_reducer";
import auth from "./auth_reducer";
import user from "./user_reducer";

const rootReducer = combineReducers({ events, auth, user });

export default rootReducer;
