import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";

import Card from "./Card";

import { addClient } from "../thunk";

const NewClientCard = ({ addressId }) => {
	const [phoneInputError, setPhoneInputError] = useState(false);
	const { id: companyId } = useParams();
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	useEffect(() => {
		if (phoneInputError) {
			const timeoutId = setTimeout(() => {
				setPhoneInputError(false);
			}, 5000);
			return () => clearTimeout(timeoutId);
		}
	}, [phoneInputError]);
	return (
		<Card.New>
			<Card.Input
				type="text"
				placeholder="Имя"
				value={name}
				onChange={(e) => setName(e.target.value)}
			></Card.Input>
			<Card.Input
				type="text"
				placeholder="Номер телефона"
				error={phoneInputError}
				value={phone}
				onChange={(e) => {
					setPhone(e.target.value);
					setPhoneInputError(false);
				}}
			></Card.Input>
			<Card.Input
				type="text"
				placeholder="Почта"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			></Card.Input>
			<Card.AddButton
				ready={phone}
				onClick={() => {
					if (!phone) {
						setPhoneInputError(true);
					}
					if (phone) {
						dispatch(addClient({ name, phone, email }, addressId, companyId));
						setName("");
						setPhone("");
						setEmail("");
					}
				}}
			>
				Добавить жильца
			</Card.AddButton>
		</Card.New>
	);
};

export default NewClientCard;
