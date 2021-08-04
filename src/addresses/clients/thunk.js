import request from "../../utils/request";
import { deletedClient, addedClient } from "./action";
import { ERROR_NOTIFICATION_TEXTS } from "../../notification/notificationTexts";
import { getAddresses } from "../thunk";

export const deleteClient = (client, addressId) => async (dispatch) => {
	await request(
		request.del,
		"HousingStock/bind_client",
		client.bindId,
		{},
		ERROR_NOTIFICATION_TEXTS.DELETE_CLIENT
	);
	dispatch(deletedClient(client, addressId));
};

export const addClient = (client, addressId, companyId) => async (dispatch) => {
	const response = await request(
		request.post,
		"HousingStock/client",
		"",
		{
			Name: client.name,
			Phone: client.phone,
			Email: client.email,
		},
		ERROR_NOTIFICATION_TEXTS.CREATE_CLIENT
	);

	await request(
		request.put,
		"HousingStock/bind_client",
		"",
		{
			AddressId: addressId,
			ClientId: response.data.id,
		},
		ERROR_NOTIFICATION_TEXTS.ADD_CLIENT
	);
	if (!response) {
		return;
	}
	dispatch(addedClient({ ...client, id: response.data.id }, addressId));
	dispatch(getAddresses(companyId));
};
