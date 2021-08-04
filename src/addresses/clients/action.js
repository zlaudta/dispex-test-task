export const DELETED_CLIENT = "DELETED_CLIENT";
export const ADDED_CLIENT = "ADDED_CLIENT";

export const deletedClient = (client, addressId) => {
	return {
		type: DELETED_CLIENT,
		client,
		addressId,
	};
};

export const addedClient = (client, addressId) => {
	return {
		type: ADDED_CLIENT,
		client,
		addressId,
	};
};
