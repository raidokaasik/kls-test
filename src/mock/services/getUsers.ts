import { User } from "@/types";

export const getUsers = async (): Promise<User[]> => {
	try {
		return await fetch("/api/users")
			.then(async (res: Response) => res.json())
			.then((data) => {
				return data.users;
			});
	} catch (error) {
		throw new Error(`Could not retrieve users: ${error}`);
	}
};
