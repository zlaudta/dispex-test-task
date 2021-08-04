import { useState } from "react";
import { List, Icon } from "semantic-ui-react";

import Clients from "../clients/components/Clients";

const Flat = ({ flatId, flat }) => {
	const [clientsOpened, setClientsOpened] = useState(false);
	return (
		<>
			<List.Item
				as={"a"}
				onClick={(e) => {
					e.stopPropagation();
					setClientsOpened(!clientsOpened);
				}}
			>
				<Icon name={"ticket alternate"} />
				<List.Content>
					<List.Header>Квартира №{flatId}</List.Header>
				</List.Content>
			</List.Item>
			{clientsOpened && (
				<Clients clients={flat.clients} addressId={flat.addressId} />
			)}
		</>
	);
};

export default Flat;
