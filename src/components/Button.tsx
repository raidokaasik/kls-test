import styled from "styled-components";

const primaryButtonColor = "#475DE5";
const primaryButtonHover = "#3f55d4";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...otherProps }: ButtonProps) => {
	return <StyledButton {...otherProps}>{children}</StyledButton>;
};

const StyledButton = styled.button(({ theme: { palette } }) => {
	return {
		height: "40px",
		width: "122px",
		borderRadius: "4px",
		background: primaryButtonColor,
		border: 0,
		color: palette.common.white,
		fontSize: "14px",
		fontWeight: "500",
		cursor: "pointer",
		"&:hover": {
			background: primaryButtonHover,
		},
	};
});
