import { combineReducers } from "redux";
import { companies } from "./companies/reducer";
import { addresses } from "./addresses/reducer";
import { notification } from "./notification/reducer";

export default combineReducers({
	companies,
	addresses,
	notification,
});
