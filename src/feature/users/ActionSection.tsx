import { deleteSelectedUsers } from "../../redux/features/users/userSlice";
import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ActionButton } from "../../components/ActionButton";

const nUsersSelected = (count: number) => {
	return `${count} ${count === 1 ? "user" : "users"} selected`;
};

export const ActionSection = ({ count }: any) => {
	console.log("COUNT::", count);
	const dispatch = useAppDispatch();
	const selectedUsersCount = useAppSelector(
		(state) => state.userState.selectedUsers.length
	);
	const selectedUsersP = nUsersSelected(selectedUsersCount);

	return (
		<ActionSectionContainer>
			<SelectedUsersParagraph>{selectedUsersP}</SelectedUsersParagraph>
			<ButtonBox>
				<ActionButton variant="edit" />
				<ActionButton
					variant="delete"
					onClick={() => {
						dispatch(deleteSelectedUsers());
					}}
				/>
			</ButtonBox>
		</ActionSectionContainer>
	);
};

const ActionSectionContainer = styled.div(({}) => ({
	width: "100%",
	height: "32px",
	background: "#fff",
	display: "inline-flex",
	alignItems: "center",
	marginBottom: "24px",
}));

const ButtonBox = styled.div(() => ({
	display: "inline-flex",
	gap: "8px",
}));

const SelectedUsersParagraph = styled.p(
	({ theme: { palette, typography } }) => ({
		marginRight: "25px",
		display: "inline-block",
		color: palette.paragraph.subheader,
		fontWeight: typography.weight.medium,
	})
);
