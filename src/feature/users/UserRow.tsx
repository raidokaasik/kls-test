import { memo, useState } from "react";
import { CheckBox } from "../../components/CheckBox";
import { selectUser } from "../../redux/features/users/userSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { styled } from "styled-components";
import { User } from "../../types";
import { Role, UserRole } from "./UserRole";
import userPlaceholder from "../../assets/icons/user-placeholder.svg";

type UserRowProps = {
	style: React.CSSProperties;
	user: User;
};

export const UserRow = memo(({ style, user }: UserRowProps) => {
	const [profileImage, setProfileImage] = useState<string>(user.avatar);
	const dispatch = useAppDispatch();
	const selectedUsers = useAppSelector(
		(state) => state.userState.selectedUsers
	);

	const isSelected = selectedUsers.includes(user.id);

	return (
		<UserWrapper
			style={{
				...style,
			}}
			key={user.id}
		>
			<UserContainer>
				<div
					style={{
						display: "inline-flex",
						alignItems: "center",
						gap: "12px",
						width: "385px",
					}}
				>
					<CheckBox
						checked={isSelected}
						id={`selectUser_${user.id}`}
						onChange={() => dispatch(selectUser(user.id))}
					/>
					<UserAvatar
						alt="user-profile-image"
						src={profileImage}
						onError={() => setProfileImage(userPlaceholder)}
					/>

					<div>
						<UserName>{user.name}</UserName>
						<UserEmail>{user.email}</UserEmail>
					</div>
				</div>

				<UserRole variant={user.role.toLowerCase() as Role} />
			</UserContainer>
		</UserWrapper>
	);
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
	"&:not(:last-child)": {
		paddingBottom: "4px",
	},
});

const UserContainer = styled.div(({ theme: { palette } }) => ({
	display: "inline-flex",
	alignItems: "center",
	background: palette.common.white,
	height: "100%",
	width: "100%",
	borderRadius: "4px",
	paddingLeft: "16px",
	"&:hover": {
		background: "#F7FAFC",
	},
}));

const UserAvatar = styled.img({
	objectFit: "cover",
	objectPosition: "center",
	height: "32px",
	borderRadius: "50%",
	width: "32px",
});
