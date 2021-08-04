import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CompaniesList from "./CompaniesList";
import Preloader from "../../components/Preloader";

import { getCompanies } from "../thunk";

const CompaniesPage = () => {
	const listLoaded = useSelector((store) => store.companies.ready);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCompanies());
	}, [dispatch]);
	if (listLoaded) {
		return <CompaniesList />;
	}
	return <Preloader />;
};

export default CompaniesPage;
