import { deleteSelectedUsers } from "../../redux/features/users/userSlice";
import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const ActionSection = () => {
	const dispatch = useAppDispatch();
	const selectedUsersCount = useAppSelector(
		(state) => state.userState.selectedUsers.length
	);
	return (
		<ActionSectionContainer>
			<p style={{ marginRight: "25px" }}>{selectedUsersCount} users selected</p>
			<button>Edit</button>
			<button
				onClick={() => {
					dispatch(deleteSelectedUsers());
				}}
			>
				Delete
			</button>
		</ActionSectionContainer>
	);
};

const ActionSectionContainer = styled.div(({}) => ({
	width: "100%",
	height: "32px",
	background: "#fff",
	display: "inline-flex",
	marginBottom: "24px",
}));
