import { useDispatch, useSelector } from "react-redux";
import { deleteSelectedUsers } from "../../redux/features/users/userSlice";

export const ActionBar = () => {
	const dispatch = useDispatch();
	const selectedUsersCount = useSelector(
		(state: any) => state.userState.selectedUsers.length
	);
	return (
		<div
			style={{
				width: "100%",
				height: "32px",
				background: "#fff",
				display: "inline-flex",
			}}
		>
			<p style={{ marginRight: "25px" }}>{selectedUsersCount} users selected</p>
			<button>Edit</button>
			<button
				onClick={() => {
					dispatch(deleteSelectedUsers());
				}}
			>
				Delete
			</button>
		</div>
	);
};
