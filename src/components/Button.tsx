import styled from "styled-components";

type ButtonTypes = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	buttonType: ButtonTypes;
}

export const Button = ({
	children,
	buttonType = "primary",
	...otherProps
}: ButtonProps) => {
	return <StyledButton {...otherProps}>{children}</StyledButton>;
};

const StyledButton = styled.button(({ theme: { palette } }) => {
	return {
		height: "40px",
		width: "122px",
		borderRadius: "4px",
		background: "#475DE5",
		border: 0,
		color: palette.common.white,
		fontSize: "14px",
		fontWeight: "500",
		cursor: "pointer",
	};
});
