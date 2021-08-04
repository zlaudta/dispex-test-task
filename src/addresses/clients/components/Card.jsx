import styled, { css } from "styled-components";

import {
	CARD_ADD_BUTTON_DISABLED_COLOR,
	CARD_ADD_BUTTON_BASIC_COLOR,
	CARD_ADD_BUTTON_HOVER_COLOR,
	CARD_ADD_BUTTON_ACTIVE_COLOR,
} from "./buttonColors";

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: start;
	padding: 10px;
	height: 120px;
	width: 190px;
	margin: 5px 5px;
	background-color: #e5e4e2;
	box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
	position: relative;
`;

Card.Client = styled(Card)`
	background-color: #e5e4e2;
`;

Card.New = styled(Card)`
	background-color: #dff8e9;
`;

Card.Description = styled.span`
	color: black;
`;

Card.Header = styled.h4`
	color: black;
`;

Card.DeleteButton = styled.button`
	color: black;
	background-color: transparent;
	cursor: pointer;
	border: none;
	position: absolute;
	top: 5px;
	right: 5px;
	padding: 1px;
	&:hover {
		color: red;
	}
`;

// Тут использую ready, а не disabled,
// потому что onClick для вывода ошибки по инпуту не проходит с disabled
Card.AddButton = styled.button`
	align-self: stretch;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	padding: 1px;
	color: #ffffff;
	background-color: ${({ ready }) => {
		return ready ? CARD_ADD_BUTTON_BASIC_COLOR : CARD_ADD_BUTTON_DISABLED_COLOR;
	}};
	${({ ready }) =>
		ready &&
		css`
			&:hover {
				background-color: ${CARD_ADD_BUTTON_HOVER_COLOR};
			}
			&:active {
				background-color: ${CARD_ADD_BUTTON_ACTIVE_COLOR};
			}
		`}
`;

Card.Input = styled.input`
	border: none;
	border-radius: 5px;
	outline: none;
	margin-bottom: 5px;
	background-color: ${({ error }) => (error ? "#e7b2a6" : "#ffffff")};
`;

export default Card;
