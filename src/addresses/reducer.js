import { changeAddressFormat } from "../utils/changeAddressFormat";
import { GOT_ADDRESSES, CLEAR_ADDRESSES } from "./action";
import { DELETED_CLIENT, ADDED_CLIENT } from "./clients/action";

const INITIAL_VALUE = {
	addresses: [],
	byStreets: undefined,
	ready: false,
};

export const addresses = (store = INITIAL_VALUE, action) => {
	switch (action.type) {
		case GOT_ADDRESSES:
			return {
				addresses: action.payload,
				byStreets: changeAddressFormat(action.payload),
				ready: true,
			};
		case ADDED_CLIENT:
			let addressesWithNewClient = store.addresses.map((el) => {
				if (el.addressId === action.addressId) {
					el.clients.push(action.client);
				}
				return el;
			});
			return {
				...store,
				addresses: addressesWithNewClient,
				byStreets: changeAddressFormat(addressesWithNewClient),
				ready: true,
			};
		case DELETED_CLIENT:
			let addressesWithoutDeletedClient = store.addresses.map((el) => {
				if (el.addressId === action.addressId) {
					el.clients = el.clients.filter(
						(client) => client.id !== action.client.id
					);
				}
				return el;
			});
			return {
				...store,
				addresses: addressesWithoutDeletedClient,
				byStreets: changeAddressFormat(addressesWithoutDeletedClient),
				ready: true,
			};
		case CLEAR_ADDRESSES:
			return INITIAL_VALUE;
		default:
			return store;
	}
};
