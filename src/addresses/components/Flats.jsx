import { List } from "semantic-ui-react";

import Sublist from "./Sublist";
import Flat from "./Flat";

const Flats = ({ house }) => {
	return (
		<Sublist>
			<List>
				{Object.keys(house.flats).map((flatId) => (
					<Flat flatId={flatId} flat={house.flats[flatId]} key={flatId} />
				))}
			</List>
		</Sublist>
	);
};

export default Flats;
