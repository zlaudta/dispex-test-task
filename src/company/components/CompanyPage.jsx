import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Segment, Button } from "semantic-ui-react";
import styled from "styled-components";

import AddressesTree from "../../addresses/components/AddressesTree";

const SegmentContainer = styled.div`
	width: 70%;
	@media (max-width: 400px) {
		width: 100%;
	}
`;

const InlineHeader = styled.h1`
	display: inline-block;
	padding-left: 20px;
	margin: 0px;
	wrap: no-wrap;
`;

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
`;

const CompanyPage = () => {
	const { id: companyId } = useParams();
	const name = useSelector((store) => store.companies.companiesById[companyId]);

	return (
		<SegmentContainer>
			<Segment raised>
				<HeaderContainer>
					<Link to="/">
						<Button icon="chevron circle left" />
					</Link>
					<InlineHeader>Управляющая компания {name}</InlineHeader>
				</HeaderContainer>
				<AddressesTree companyId={companyId} />
			</Segment>
		</SegmentContainer>
	);
};

export default CompanyPage;
