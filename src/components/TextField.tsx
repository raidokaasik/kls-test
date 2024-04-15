import styled from "styled-components";
import search from "@/assets/icons/search.svg";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextField = ({ ...otherProps }: TextFieldProps) => {
	return (
		<FieldContainer>
			<img src={search} alt="search" />
			<CustomInput {...otherProps} type="text" />
		</FieldContainer>
	);
};

const CustomInput = styled.input({
	border: 0,
	outline: 0,
	borderRadius: "inherit",
	height: "100%",
	width: "100%",
	paddingLeft: "36px",
	paddingTop: "2px",
	"&::placeholder": {
		fontSize: "14px",
		fontWeight: "400",
		color: "#A0AEC0",
	},
});

const FieldContainer = styled.div(({ theme: { misc } }) => ({
	border: misc.border,
	position: "relative",
	outline: 0,
	borderRadius: "4px",
	height: "40px",
	width: "204px",
	"&:hover": {
		border: "1px solid #d3ddeb",
	},
	img: {
		position: "absolute",
		left: "12px",
		top: "12px",
	},
}));
