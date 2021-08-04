import styled from "styled-components";
import { Message } from "semantic-ui-react";

import SubList from "../../components/Sublist";
import ClientCard from "./ClientCard";
import NewClientCard from "./NewClientCard";

// В задании сказано:"Список жильцов должен быть в виде карточек одинакового размера,
// расположенных справа - налево, сверху - вниз". Но в примере слева направо.
// Я сделала два варианта.
const CardsContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	@media (max-width: 600px) {
		flex-direction: row;
	}
	flex-wrap: wrap;
`;

const Clients = ({ clients, addressId }) => {
	return (
		<SubList>
			{clients.length > 0 && <h4>Жильцы</h4>}
			{clients.length === 0 && (
				<Message info>Нет информации о жильцах в этой квартире</Message>
			)}
			<CardsContainer>
				{clients.map((client) => {
					return <ClientCard client={client} addressId={addressId} />;
				})}
				<NewClientCard addressId={addressId} />
			</CardsContainer>
		</SubList>
	);
};

export default Clients;
