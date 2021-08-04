import { GOT_COMPANIES } from "./action";

const INITIAL_VALUE = {
	companies: [],
	companiesById: {},
	ready: false,
};

export const companies = (store = INITIAL_VALUE, action) => {
	switch (action.type) {
		case GOT_COMPANIES:
			return {
				...action.payload,
				ready: true,
			};
		default:
			return store;
	}
};
