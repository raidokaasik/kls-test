// styled.d.ts
import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		palette: {
			common: {
				white: string;
			};
			paragraph: {
				primary: string;
				label: string;
				subheader: string;
			};
			textField: {
				placeholder: string;
			};
			common: {
				white: string;
			};
			icons: {
				light: string;
				dark: string;
			};
			background: {
				usersContainer: string;
			};
		};
	}
}
