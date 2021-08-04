import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Preloader from "../../components/Preloader";
import Streets from "./Streets";

import { getAddresses } from "../thunk";
import { clearAddresses } from "../action";

const AddressesTree = ({ companyId }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getAddresses(companyId));
		return () => {
			dispatch(clearAddresses());
		};
	}, [dispatch, companyId]);
	const ready = useSelector((store) => store.addresses.ready);
	if (!ready) {
		return <Preloader />;
	}
	return <Streets />;
};

export default AddressesTree;
