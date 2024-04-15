import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/features/users/userSlice";

export const store = configureStore({
	reducer: {
		userState: userReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			serializableCheck: false,
			immutableCheck: false,
		});
	},
	devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
