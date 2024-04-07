import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../types";

export interface IUserState {
	searchTerm: string;
	users: User[];
	selectedUsers: number[];
}

const initialState: IUserState = {
	searchTerm: "",
	users: [],
	selectedUsers: [],
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
		selectUser: (state, action) => {
			const selectedId: number = action.payload;
			if (!state.selectedUsers.includes(selectedId)) {
				state.selectedUsers.push(selectedId);
			}
		},
		deselectUser: (state, action) => {
			const selectedId: number = action.payload;
			if (state.selectedUsers.includes(selectedId)) {
				state.selectedUsers = state.selectedUsers.filter(
					(id: number) => id !== selectedId
				);
			}
		},
		deleteSelectedUsers: (state) => {
			if (state.selectedUsers.length > 0) {
				state.users = state.users.filter(
					(item: User) => !state.selectedUsers.includes(item.id)
				);
				state.selectedUsers = [];
			}
		},
	},
});

export const {
	setSearchTerm,
	setUsers,
	selectUser,
	deselectUser,
	deleteSelectedUsers,
} = userSlice.actions;
export default userSlice.reducer;
