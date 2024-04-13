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
				if (state.selectedUsers.length === state.users.length) {
					state.users = [];
				} else {
					state.users = state.users.filter(
						(item: User) => !state.selectedUsers.includes(item.id)
					);
				}

				state.selectedUsers = [];
			}
		},
		sortUsers: (state, action: PayloadAction<Sort>) => {
			if (state.users.length > 1) {
				const sortedUsers = [...state.users] as User[];
				sortedUsers.sort((a: User, b: User) => {
					if (a.role < b.role) {
						return action.payload === "ascended" ? -1 : 1;
					}
					if (a.role > b.role) {
						return action.payload === "ascended" ? 1 : -1;
					}
					return 0;
				});
				state.sort.byRole = action.payload;
				state.users = sortedUsers;
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
	sortUsers,
} = userSlice.actions;
export default userSlice.reducer;
