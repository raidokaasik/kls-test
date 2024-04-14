import { deleteSelectedUsers } from "../../redux/features/users/userSlice";
import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ActionButton } from "../../components/ActionButton";

const nUsersSelected = (count: number) => {
	return `${count} ${count === 1 ? "user" : "users"} selected`;
};

const uncheckAfterDeleteAll = () => {
	const checkb: HTMLInputElement | null =
		document.querySelector("#select-all-users");
	if (checkb) {
		checkb.checked = false;
	}
};

export const ActionSection = () => {
	const dispatch = useAppDispatch();
	const userCount = useAppSelector((state) => state.userState.selectedUsers);
	const selectedUsersP = nUsersSelected(userCount);

	return (
		<ActionSectionContainer>
			<SelectedUsersParagraph>{selectedUsersP}</SelectedUsersParagraph>
			<ButtonBox>
				<ActionButton variant="edit" />
				<ActionButton
					variant="delete"
					onClick={() => {
						dispatch(deleteSelectedUsers());
						uncheckAfterDeleteAll();
					}}
				/>
			</ButtonBox>
		</ActionSectionContainer>
	);
};

const ActionSectionContainer = styled.div(({ theme: { palette } }) => ({
	width: "100%",
	height: "32px",
	background: palette.common.white,
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
