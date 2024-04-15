import { User } from "@/types";
import { SortPayload } from "@/redux/features/users/userSlice";

const setUserSelection = (
	users: User[],
	value: boolean,
	selectedId: number
) => {
	return users.map((user: User) => {
		if (user.id === selectedId) {
			return { ...user, active: value };
		}
		return user;
	});
};

const sortUsersBy = (users: User[], payload: SortPayload) => {
	const sortedUsers = [...users];
	const by = payload.by;
	const order = payload.order;

	sortedUsers.sort((a: User, b: User) => {
		if (a[by] < b[by]) {
			return order[by] === "ascended" ? -1 : 1;
		}
		if (a[by] > b[by]) {
			return order[by] === "ascended" ? 1 : -1;
		}
		return 0;
	});
	return sortedUsers;
};

export { setUserSelection, sortUsersBy };
