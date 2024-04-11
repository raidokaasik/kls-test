import { DefaultTheme, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: "Inter", sans-serif;
  }
`;

export const theme: DefaultTheme = {
	palette: {
		paragraph: {
			primary: "#1A202C",
			label: "#718096",
			subheader: "#2D3748",
		},
		textField: {
			placeholder: "#A0AEC0",
		},
		common: {
			white: "#FFFFFF",
		},
		icons: {
			light: "#A0AEC0",
			dark: "#718096",
		},
		background: {
			usersContainer: "#EDF2F7",
		},
	},
};
