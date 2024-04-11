import { selectUser } from "../../redux/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const UserRow = ({ style, user }: any) => {
	const dispatch = useAppDispatch();
	const selectedUsers = useAppSelector(
		(state) => state.userState.selectedUsers
	);

	const isSelected = selectedUsers.includes(user.id);

	return (
		<div style={{ ...style, display: "inline-flex" }} key={user.id}>
			<input
				type="checkbox"
				checked={isSelected}
				id={`selectUser_${user.id}`}
				onChange={() => dispatch(selectUser(user.id))}
			/>
			<div>
				<p style={{ color: isSelected ? "blue" : "black" }}>{user.name}</p>
				<p>{user.email}</p>
			</div>
			<p>{user.role}</p>
		</div>
	);
};
