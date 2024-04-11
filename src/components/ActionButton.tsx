import styled from "styled-components";

type ButtonVariants = "edit" | "delete";
interface ActionButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariants;
}

export const ActionButton = ({}: ActionButtonProps) => {
	return <CustomButton></CustomButton>;
};

const CustomButton = styled.button(() => ({
	height: "32px",
	width: "fit-content",
}));
