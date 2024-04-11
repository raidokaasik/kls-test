import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";

type Sort = "ascended" | "descended";

interface IUserState {
	searchTerm: string;
	users: User[];
	selectedUsers: number[];
	sort: {
		byRole: Sort | "";
	};
}

const initialState: IUserState = {
	searchTerm: "",
	users: [],
	selectedUsers: [],
	sort: {
		byRole: "",
	},
};

export const userSlice = createSlice({
	name: "userReducer",
	initialState,
	reducers: {
		setUsers: (state, action: PayloadAction<User[]>) => {
			state.users = action.payload;
		},
		setSearchBy: (state, action: PayloadAction<string>) => {
			state.searchTerm = action.payload.toLowerCase();
		},
		selectUser: (state, action: PayloadAction<number>) => {
			const selectedId = action.payload;
			if (state.selectedUsers.includes(selectedId)) {
				state.selectedUsers = state.selectedUsers.filter(
					(id: number) => id !== selectedId
				);
			} else {
				state.selectedUsers.push(selectedId);
			}
		},
		selectAllUsers: (state) => {
			state.selectedUsers = state.users.map((user: User) => user.id);
		},
		deselectAllUsers: (state) => {
			state.selectedUsers = [];
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
	setSearchBy,
	setUsers,
	selectUser,
	deleteSelectedUsers,
	selectAllUsers,
	deselectAllUsers,
} = userSlice.actions;
export default userSlice.reducer;
