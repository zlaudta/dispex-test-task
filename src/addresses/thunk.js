import request from "../utils/request";
import { gotAddresses } from "./action";

import { ERROR_NOTIFICATION_TEXTS } from "../notification/notificationTexts";

export const getAddresses = (companyId) => async (dispatch) => {
	const response = await request(
		request.get,
		"HousingStock",
		"",
		{
			companyId,
		},
		ERROR_NOTIFICATION_TEXTS.GET_ADDRESSES
	);
	if (!response) {
		return;
	}
	dispatch(gotAddresses(response.data));
};
