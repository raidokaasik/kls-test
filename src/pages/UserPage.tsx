import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setUsers } from "../redux/features/users/userSlice";
import { getUsers } from "../mock/services/getUsers";
import { UserPageWrapper } from "../feature/users/UserPageWrapper";
import { Users } from "../feature/users/Users";
import { PageHeader } from "../feature/users/PageHeader";

export const UserPage = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		getUsers().then((users) => {
			if (users) {
				dispatch(setUsers(users));
			}
		});
	}, []);

	return (
		<UserPageWrapper>
			<PageHeader />
			<Users />
		</UserPageWrapper>
	);
};
