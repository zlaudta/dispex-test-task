export const NEW_NOTIFICATION = "NEW_NOTIFICATION";
export const DELETE_NOTIFICATION = "DELETE_NOTIFICATION";

export const newNotification = (text, id) => {
	return {
		type: NEW_NOTIFICATION,
		payload: { text, id },
	};
};

export const deleteNotification = (id) => {
	return {
		type: DELETE_NOTIFICATION,
		payload: id,
	};
};
