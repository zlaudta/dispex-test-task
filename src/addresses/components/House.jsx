import { useState } from "react";
import { List, Icon } from "semantic-ui-react";

import Flats from "./Flats";

const House = ({ houseId, house }) => {
	const [flatsOpened, setFlatsOpened] = useState(false);
	return (
		<>
			<List.Item
				as={"a"}
				onClick={(e) => {
					e.stopPropagation();
					setFlatsOpened(!flatsOpened);
				}}
			>
				<Icon name={"building"} />
				<List.Content>
					<List.Header>Дом №{house.building}</List.Header>
					{house.corpus && (
						<List.Description>Корпус №{house.corpus}</List.Description>
					)}
				</List.Content>
			</List.Item>
			{flatsOpened && <Flats houseId={houseId} house={house} />}
		</>
	);
};

export default House;
