import { styled } from "styled-components";
import check from "../assets/icons/check.svg";
import { memo } from "react";

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const CheckBox = memo(({ ...otherProps }: CheckBoxProps) => {
	return (
		<CheckBoxContainer>
			<CustomCheckBoxInput
				className={"customInput"}
				{...otherProps}
				type="checkbox"
			/>
			<CheckMark className={"checkmark"}>
				<img className={"checkmarkicon"} src={check} alt="checkbox-icon" />
			</CheckMark>
		</CheckBoxContainer>
	);
});

const CustomCheckBoxInput = styled.input(({}) => ({
	position: "absolute",
	opacity: 0,
	cursor: "pointer",
	height: 0,
	width: 0,
	"&:checked ~ .checkmark": {
		background: "#475DE5",
		border: "1px solid #475DE5",
		img: {
			display: "block",
		},
	},
}));

const CheckBoxContainer = styled.label(() => ({
	position: "relative",
	display: "inline-flex",
	alignItems: "center",
	cursor: "pointer",
	height: "16px",
	width: "16px",
}));

const CheckMark = styled.span(({ theme: { palette } }) => ({
	position: "absolute",
	top: 0,
	left: 0,
	height: "16px",
	width: "16px",
	display: "inline-flex",
	justifyContent: "center",
	alignItems: "center",
	borderRadius: "3px",
	background: palette.common.white,
	border: "1px solid #CBD5E0",
	img: {
		display: "none",
	},
}));
