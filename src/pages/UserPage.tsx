import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "../redux/features/users/userSlice";
import { getUsers } from "../mock/services/getUsers";
import { User } from "../types";
import { UserPageWrapper } from "../feature/users/UserPageWrapper";
import { UserList } from "../feature/users/UserList";

export const UserPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		getUsers().then((users: User[]) => {
			if (users) {
				dispatch(setUsers(users));
			}
		});
	}, []);

	return (
		<UserPageWrapper>
			<div style={{ height: "624px", width: "684px", background: "#fff" }}>
				<UserList />
			</div>
		</UserPageWrapper>
	);
};
