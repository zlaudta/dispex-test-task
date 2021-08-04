import { newNotification, deleteNotification } from "./action";

let notificationId = 0;

export const eventNotification = (text) => (dispatch) => {
	dispatch(newNotification(text, notificationId));
	setTimeout(
		(notificationId) => {
			dispatch(deleteNotification(notificationId));
		},
		7000,
		notificationId
	);
	notificationId++;
};
