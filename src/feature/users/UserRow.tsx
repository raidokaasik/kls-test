import { CheckBox } from "@/components/CheckBox";
import {
	deleteUserById,
	deselectUser,
	selectUser,
} from "@/redux/features/users/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { styled } from "styled-components";
import { User } from "@/types";
import { Role, UserRole } from "@/feature/users/UserRole";
import userPlaceholder from "@/assets/icons/user-placeholder.svg";
import { ActionButton } from "@/components/ActionButton";
import { useState } from "react";

type UserRowProps = {
	style: React.CSSProperties;
	user: User;
};

const getCheckBoxProps = (id: number) => {
	const rowId = `selectUser_${id}`;
	const checkbox: HTMLInputElement | null = document.querySelector(`#${rowId}`);

	return { rowId, checkbox };
};

const handleAvatarError = (
	event: React.SyntheticEvent<HTMLImageElement, Event>
) => (event.currentTarget.src = userPlaceholder);

const userActiveDecoColor = "#475DE5";
const userActiveBackgroundColor = "#F7FAFC";

export const UserRow = ({ style, user }: UserRowProps) => {
	const dispatch = useAppDispatch();
	const [showActions, setShowActions] = useState<boolean>(false);
	const { checkbox, rowId } = getCheckBoxProps(user.id);
	const userIsActive = showActions || user.active;

	const handleRowSelection = (
		event: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		event.preventDefault();
		if (checkbox && !checkbox.checked) {
			return dispatch(selectUser(user.id));
		}
		return dispatch(deselectUser(user.id));
	};

	const handleUserDelete = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		event.stopPropagation();
		dispatch(deleteUserById(user.id));
	};

	return (
		<UserWrapper
			style={{
				...style,
			}}
			key={user.id}
		>
			<UserContainer
				selected={user.active}
				onClick={handleRowSelection}
				onMouseEnter={() => setShowActions(true)}
				onMouseLeave={() => setShowActions(false)}
			>
				{userIsActive && <UserRowDecoration />}
				{showActions && (
					<UserActionButtons>
						<ActionButton
							variant="edit"
							onClick={(event) => event.stopPropagation()}
						/>
						<ActionButton
							variant="delete"
							onlyIcon
							onClick={handleUserDelete}
						/>
					</UserActionButtons>
				)}
				<UserCredentials>
					<CheckBox checked={user.active} id={rowId} readOnly />
					<UserAvatar
						alt="user-profile-image"
						src={user.avatar}
						onError={handleAvatarError}
					/>
					<div>
						<UserName>{user.name}</UserName>
						<UserEmail>{user.email}</UserEmail>
					</div>
				</UserCredentials>
				<UserRole variant={user.role.toLowerCase() as Role} />
			</UserContainer>
		</UserWrapper>
	);
};

const UserRowDecoration = styled.div({
	position: "absolute",
	top: 0,
	left: 0,
	borderTopLeftRadius: "4px",
	borderBottomLeftRadius: "4px",
	height: "inherit",
	width: "4px",
	background: userActiveDecoColor,
});

const UserActionButtons = styled.div({
	width: "fit-content",
	height: "64px",
	display: "inline-flex",
	gap: "4px",
	marginRight: "24px",
	alignItems: "center",
	position: "absolute",
	top: 0,
	right: 0,
});

const UserName = styled.p(({ theme: { palette, typography } }) => ({
	fontSize: "14px",
	fontWeight: typography.weight.medium,
	color: palette.paragraph.primary,
}));

const UserEmail = styled.p(({ theme: { palette, typography } }) => ({
	fontSize: "14px",
	color: palette.paragraph.label,
	fontWeight: typography.weight.regular,
}));

const UserWrapper = styled.div({
	paddingBottom: "4px",
});

const UserCredentials = styled.div({
	display: "inline-flex",
	alignItems: "center",
	gap: "12px",
	width: "385px",
});

type HTMLElementCustomProps = {
	selected: boolean;
};
const UserContainer = styled.div<HTMLElementCustomProps>(
	({ theme: { palette }, selected }) => ({
		display: "inline-flex",
		alignItems: "center",
		position: "relative",
		background: selected ? userActiveBackgroundColor : palette.common.white,
		height: "100%",
		width: "100%",
		borderRadius: "4px",
		paddingLeft: "16px",
		cursor: "pointer",
		"&:hover": {
			background: userActiveBackgroundColor,
		},
	})
);

const UserAvatar = styled.img({
	objectFit: "cover",
	objectPosition: "center",
	height: "32px",
	borderRadius: "50%",
	width: "32px",
});
