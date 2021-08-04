import { List } from "semantic-ui-react";

import House from "./House";
import SubList from "./Sublist";

const Houses = ({ street }) => {
	return (
		<SubList>
			<List as={List.List}>
				{Object.keys(street.houses).map((houseId) => {
					return (
						<House
							houseId={houseId}
							key={houseId}
							house={street.houses[houseId]}
						/>
					);
				})}
			</List>
		</SubList>
	);
};

export default Houses;
