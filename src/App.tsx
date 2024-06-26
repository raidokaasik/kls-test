import { ThemeProvider } from "styled-components";
import { UserPage } from "@/pages/UserPage";
import { theme } from "@/theme";
import { AppLayout } from "@/layout/AppLayout";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppLayout>
				<UserPage />
			</AppLayout>
		</ThemeProvider>
	);
}

export default App;
