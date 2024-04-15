import { User } from "@/types";

export function filteredUsers(users: User[], searchBy: string): User[] {
	return users.filter((user: User) => {
		const source = String(
			`${user.name}_${user.role}_${user.email}`
		).toLowerCase();
		return source.includes(searchBy);
	});
}
