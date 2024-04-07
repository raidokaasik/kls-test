import { User } from "../../types/index";

export const getUsers = async (): Promise<User[]> => {
	try {
		return await fetch("/api/users").then(async (res: Response) => {
			const data = await res.json();
			return data.users;
		});
	} catch (error) {
		throw new Error("Could not retrieve users");
	}
};
