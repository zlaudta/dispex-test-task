import request from "../utils/request";
import { gotCompanies } from "./action";
import { ERROR_NOTIFICATION_TEXTS } from "../notification/notificationTexts";

export const getCompanies = (companyId) => async (dispatch) => {
	const response = await request(
		request.get,
		"Request/companies",
		"",
		{
			companyId,
		},
		ERROR_NOTIFICATION_TEXTS.GET_COMPANIES
	);
	if (!response) {
		return;
	}
	dispatch(gotCompanies(response.data));
};
