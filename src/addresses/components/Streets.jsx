import { Fragment } from "react";
import { useSelector } from "react-redux";
import { List, Message } from "semantic-ui-react";
import styled from "styled-components";

import Street from "./Street";

const Divider = styled.div`
	height: 15px;
`;

const Streets = () => {
	const addresses = useSelector((store) => store.addresses.byStreets);
	if (!addresses) {
		return null;
	}
	if (Object.keys(addresses).length === 0) {
		return <Message info>У компании нет адресов</Message>;
	}
	return (
		<List>
			{Object.keys(addresses).map((streetId) => {
				return (
					<Fragment key={streetId}>
						<Street street={addresses[streetId]} />
						<Divider />
					</Fragment>
				);
			})}
		</List>
	);
};

export default Streets;
