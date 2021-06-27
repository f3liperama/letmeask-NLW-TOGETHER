import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;	
	}

	body, button, input, textarea {
		font: 400 16px 'Roboto', sans-serif;
	}

	button {
		cursor: pointer;
	}
`;

export default GlobalStyle;