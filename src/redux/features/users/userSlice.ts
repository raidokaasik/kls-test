import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types";
import { setUserSelection, sortUsersBy } from "@/redux/features/users/utils";

export type Sort = "ascended" | "descended";
export type SortPayload = {
	by: "role" | "name";
	order: {
		name: Sort;
		role: Sort;
	};
};

interface IUserState {
	searchTerm: string;
	users: User[];
	selectedUsers: number;
	sort: {
		by: "role" | "name" | "";
		order: {
			name: Sort;
			role: Sort;
		};
	};
}

const initialState: IUserState = {
	searchTerm: "",
	users: [],
	selectedUsers: 0,
	sort: {
		by: "",
		order: {
			name: "descended",
			role: "descended",
		},
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
			state.users = setUserSelection(state.users, true, action.payload);
			state.selectedUsers += 1;
		},
		deselectUser: (state, action: PayloadAction<number>) => {
			state.users = setUserSelection(state.users, false, action.payload);
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
			const user = state.users.find((user: User) => user.id === action.payload);
			if (user?.active && state.selectedUsers !== 0) {
				state.selectedUsers -= 1;
			}

			state.users = state.users.filter(
				(user: User) => user.id !== action.payload
			);
		},
		deleteSelectedUsers: (state) => {
			state.users = state.users.filter((user) => !user.active);
			state.selectedUsers = 0;
		},
		sortUsers: (state, action: PayloadAction<SortPayload>) => {
			if (state.users.length > 1) {
				const sortedUsers = sortUsersBy(state.users, action.payload);
				const { by, order } = action.payload;

				state.users = sortedUsers;
				state.sort.by = by;
				state.sort.order = order;
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
	sortUsers,
	deleteSelectedUsers,
	deleteUserById,
} = userSlice.actions;

export default userSlice.reducer;
