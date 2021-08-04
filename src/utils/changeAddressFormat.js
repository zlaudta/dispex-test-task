export const changeAddressFormat = (address) => {
	const streets = {};
	address.forEach((address) => {
		const {
			clients: argClients,
			addressId: argAddressId,
			streetId: argStreetId,
			houseId: argHouseId,
			streetName: argStreet,
			building: argBuilding,
			flat: argFlat,
		} = address;
		if (!(argStreetId in streets)) {
			streets[argStreetId] = {
				streetName: argStreet,
				houses: {},
			};
		}
		if (!(argHouseId in streets[argStreetId].houses)) {
			streets[argStreetId].houses[argHouseId] = {
				building: argBuilding,
				flats: {},
			};
		}
		if (!(argFlat in streets[argStreetId].houses[argHouseId].flats)) {
			streets[argStreetId].houses[argHouseId].flats[argFlat] = {
				addressId: argAddressId,
				clients: [],
			};
		}
		streets[argStreetId].houses[argHouseId].building = argBuilding;
		streets[argStreetId].houses[argHouseId].flats[argFlat].clients.push(
			...argClients
		);
		if (address.corpus) {
			streets[argStreetId].houses[argHouseId].corpus = address.corpus;
		}
	});
	return streets;
};
