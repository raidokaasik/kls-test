import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";
import { handleUserSelection } from "./utils";

export type Sort = "ascended" | "descended";

type SortPayload = {
	by: "role" | "name";
	order: "ascended" | "descended";
};

interface IUserState {
	searchTerm: string;
	users: User[];
	selectedUsers: number;
	sort: {
		by: "role" | "name" | "";
		order: "ascended" | "descended" | "";
	};
}

const initialState: IUserState = {
	searchTerm: "",
	users: [],
	selectedUsers: 0,
	sort: {
		by: "",
		order: "",
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
			state.users = handleUserSelection(state.users, true, action.payload);
			state.selectedUsers += 1;
		},
		deselectUser: (state, action: PayloadAction<number>) => {
			state.users = handleUserSelection(state.users, false, action.payload);
			if (state.selectedUsers !== 0) {
				state.selectedUsers -= 1;
			}
		},
		selectAllUsers: (state) => {
			state.users = state.users.map((user: User) => ({
				...user,
				active: true,
			}));
			state.selectedUsers = state.users.length;
		},
		deselectAllUsers: (state) => {
			state.users = state.users.map((user: User) => ({
				...user,
				active: false,
			}));
			state.selectedUsers = 0;
		},
		deleteUserById: (state, action: PayloadAction<number>) => {
			state.users = state.users.filter(
				(user: User) => user.id !== action.payload
			);
			if (state.selectedUsers !== 0) {
				state.selectedUsers -= 1;
			}
		},
		deleteSelectedUsers: (state) => {
			state.users = state.users.filter((user) => !user.active);
			state.selectedUsers = 0;
		},
		sortBy: (state, action: PayloadAction<SortPayload>) => {
			if (state.users.length > 1) {
				const sortedUsers = [...state.users] as User[];
				const by = action.payload.by;

				sortedUsers.sort((a: User, b: User) => {
					if (a[by] < b[by]) {
						return action.payload.order === "ascended" ? -1 : 1;
					}
					if (a[by] > b[by]) {
						return action.payload.order === "ascended" ? 1 : -1;
					}
					return 0;
				});

				state.users = sortedUsers;
				state.sort.by = action.payload.by;
				state.sort.order = action.payload.order;
			}
		},
	},
});

export const {
	setSearchBy,
	setUsers,
	selectUser,
	deselectUser,
	selectAllUsers,
	deselectAllUsers,
	sortBy,
	deleteSelectedUsers,
	deleteUserById,
} = userSlice.actions;

export default userSlice.reducer;
