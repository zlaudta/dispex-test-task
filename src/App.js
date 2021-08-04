import styled from "styled-components";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import CompaniesPage from "./companies/components/CompaniesPage";
import CompanyPage from "./company/components/CompanyPage";
import ErrorMessages from "./notification/components/ErrorMessages";

import "semantic-ui-css/semantic.min.css";

const ContentContainer = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	padding-top: 80px;
	@media (max-width: 400px) {
		padding-top: 30px;
	}
`;

function App() {
	return (
		<>
			<ErrorMessages />
			<ContentContainer>
				<BrowserRouter>
					<Switch>
						<Route exact path="/companies">
							<CompaniesPage />
						</Route>
						<Route exact path="/company/:id">
							<CompanyPage />
						</Route>
						<Redirect from="/" to="/companies"></Redirect>
					</Switch>
				</BrowserRouter>
			</ContentContainer>
		</>
	);
}

export default App;
