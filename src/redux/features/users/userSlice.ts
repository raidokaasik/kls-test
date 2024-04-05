import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	searchTerm: "",
	users: [],
};

export const userSlice = createSlice({
	name: "userReducer",
	initialState,
	reducers: {
		setUsers: (state, action) => {
			state.users = action.payload;
		},
		setSearchTerm: (state, action) => {
			state.searchTerm = state.searchTerm.concat(action.payload);
		},
	},
});

export const { setSearchTerm, setUsers } = userSlice.actions;
export default userSlice.reducer;
