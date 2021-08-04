import { useState } from "react";
import { List, Icon } from "semantic-ui-react";

import Houses from "./Houses";

const Street = ({ street }) => {
	const [housesOpened, setHousesOpened] = useState(false);
	return (
		<>
			<List.Item as={"a"} onClick={() => setHousesOpened(!housesOpened)}>
				<Icon name="road" />
				<List.Content>
					<List.Header>Улица {street.streetName}</List.Header>
				</List.Content>
			</List.Item>
			{housesOpened && <Houses street={street} />}
		</>
	);
};

export default Street;
