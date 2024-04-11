import styled from "styled-components";

type UserContainerProps = {
	children: JSX.Element | JSX.Element[];
};

export const UserPageWrapper = ({ children }: UserContainerProps) => {
	return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div(({ theme: { palette } }) => {
	return {
		width: "780px",
		height: "848px",
		background: palette.background.usersContainer,
		overflow: "auto",
		padding: "32px",
	};
});
