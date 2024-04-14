import { User } from "../../../types";

export const handleUserSelection = (
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
