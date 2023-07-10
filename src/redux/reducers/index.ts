import { combineReducers } from "redux";
import { History } from "history";
import { connectRouter } from "connected-react-router";
import { config } from "./OrgInfo";

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    config,
  });

export default createRootReducer;
