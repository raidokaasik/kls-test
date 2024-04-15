import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import { Provider } from "react-redux";
import { store } from "@/redux/store.ts";
import { GlobalStyle } from "@/theme";

async function initServiceWorker() {
	const { serviceWorker } = await import("./mock/serviceWorker.ts");
	return serviceWorker.start({
		onUnhandledRequest: "bypass",
		quiet: true,
	});
}

async function bootstrapApp() {
	await initServiceWorker();
	ReactDOM.createRoot(document.getElementById("root")!).render(
		<React.StrictMode>
			<GlobalStyle />
			<Provider store={store}>
				<App />
			</Provider>
		</React.StrictMode>
	);
}

bootstrapApp();
