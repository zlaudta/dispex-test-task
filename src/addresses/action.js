export const GOT_ADDRESSES = "GOT_ADDRESSES";
export const CLEAR_ADDRESSES = "CLEAR_ADDRESSES";

export const gotAddresses = (addresses) => {
	return {
		type: GOT_ADDRESSES,
		payload: addresses,
	};
};

export const clearAddresses = () => {
	return {
		type: CLEAR_ADDRESSES,
	};
};
