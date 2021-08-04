import axios from "axios";

import store from "../store";
import { eventNotification } from "../notification/thunk";
import { ERROR_NOTIFICATION_TEXTS } from "../notification/notificationTexts";

async function request(
	reqType,
	resource,
	id = "",
	params,
	errorText = ERROR_NOTIFICATION_TEXTS.UNKNOWN
) {
	const url = `${process.env.REACT_APP_URL}/${resource}${id ? `/${id}` : ""}`;
	const requestParams = reqType === "get" ? { params } : params;
	try {
		const response = await axios[reqType](url, requestParams);
		return response;
	} catch (error) {
		store.dispatch(eventNotification(errorText));
		return undefined;
	}
}

request.get = "get";
request.post = "post";
request.put = "put";
request.del = "delete";

export default request;
