import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";

interface IUserState {
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
	name: "users",
	initialState,
	reducers: {
		setUsers: (state, action: PayloadAction<User[]>) => {
			state.users = action.payload;
		},
		filterUsersBySearch: (state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload;
			state.users = state.users.filter((user: User) =>
				user.name.includes(action.payload)
			);
		},
		selectUser: (state, action: PayloadAction<number>) => {
			const selectedId = action.payload;
			if (!state.selectedUsers.includes(selectedId)) {
				state.selectedUsers.push(selectedId);
			}
		},
		deselectUser: (state, action: PayloadAction<number>) => {
			const selectedId = action.payload;
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
	filterUsersBySearch,
	setUsers,
	selectUser,
	deselectUser,
	deleteSelectedUsers,
} = userSlice.actions;
export default userSlice.reducer;
