export const GOT_COMPANIES = "GOT_COMPANIES";

export const gotCompanies = (data) => {
	return {
		type: GOT_COMPANIES,
		payload: {
			companies: data,
			companiesById: data.reduce((acc, el) => {
				acc[el.id] = el.name;
				return acc;
			}, {}),
		},
	};
};
