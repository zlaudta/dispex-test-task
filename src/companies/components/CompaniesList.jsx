import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { List, Header } from "semantic-ui-react";

const CompaniesList = () => {
	const companies = useSelector((store) => store.companies.companies);
	const history = useHistory();
	return (
		<List selection verticalAlign="middle">
			<Header as="h1">Управляющие компании</Header>
			{companies.map((company) => (
				<List.Item
					key={company.id}
					as="a"
					href={`company/${company.id}`}
					onClick={(e) => {
						// Тут не использую Link из react-router-dom,
						// 	потому что он ломает стили semantic UI
						e.preventDefault();
						history.push(`company/${company.id}`);
					}}
				>
					<List.Header>{company.name}</List.Header>
				</List.Item>
			))}
		</List>
	);
};

export default CompaniesList;
