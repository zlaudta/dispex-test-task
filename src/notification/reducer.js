import { NEW_NOTIFICATION, DELETE_NOTIFICATION } from "./action";

const INITIAL_VALUE = {
	notifications: [],
};

export const notification = (store = INITIAL_VALUE, action) => {
	switch (action.type) {
		case NEW_NOTIFICATION:
			return {
				notifications: [...store.notifications, action.payload],
			};
		case DELETE_NOTIFICATION:
			return {
				notifications: store.notifications.filter(
					(el) => el.id !== action.payload
				),
			};
		default:
			return store;
	}
};
