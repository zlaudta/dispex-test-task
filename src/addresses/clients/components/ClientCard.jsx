import { useDispatch } from "react-redux";
import { Icon } from "semantic-ui-react";

import Card from "./Card";
import { deleteClient } from "../thunk";

const ClientCard = ({ client, addressId }) => {
	const dispatch = useDispatch();
	return (
		<Card.Client key={client.id}>
			<Card.Header>{client.name || "Имя не указано"}</Card.Header>
			<Card.DeleteButton
				onClick={() => {
					dispatch(deleteClient(client, addressId));
				}}
			>
				<Icon name="user delete" />
			</Card.DeleteButton>
			<Card.Description>{client.phone || "Нет номера"}</Card.Description>
			<br />
			<Card.Description>{client.email || "Почта не указана"}</Card.Description>
		</Card.Client>
	);
};

export default ClientCard;
