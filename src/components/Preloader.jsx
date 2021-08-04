import styled from "styled-components";
import { Dimmer, Loader } from "semantic-ui-react";

const PreloaderContainer = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	z-index: 5;
	width: 100%;
	height: 100%;
`;

const Preloader = () => {
	return (
		<PreloaderContainer>
			<Dimmer active>
				<Loader />
			</Dimmer>
		</PreloaderContainer>
	);
};

export default Preloader;
