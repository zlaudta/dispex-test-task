import { useSelector } from "react-redux";
import styled from "styled-components";
import { Message } from "semantic-ui-react";

const MessagesContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 20px;
	right: 50px;
	z-index: 10;
`;

const ErrorMessages = () => {
	const notifications = useSelector(
		(store) => store.notification.notifications
	);
	return (
		<MessagesContainer>
			{notifications.map((notification) => (
				<Message negative>
					<Message.Header>{notification.text}</Message.Header>
				</Message>
			))}
		</MessagesContainer>
	);
};

export default ErrorMessages;
