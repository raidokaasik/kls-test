import styled from "styled-components";
import editIcon from "../assets/icons/edit.svg";
import deleteIcon from "../assets/icons/delete.svg";

type ButtonVariants = "edit" | "delete";

interface ActionButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onlyIcon?: boolean;
	variant: ButtonVariants;
}

const getVariant = (variant: ButtonVariants) => {
	switch (variant) {
		case "edit":
			return {
				name: "Edit",
				icon: <img src={editIcon} alt="edit-icon" />,
			};
		case "delete":
			return {
				name: "Delete",
				icon: <img src={deleteIcon} alt="delete-icon" />,
			};
		default:
			return {
				name: "N/A",
				icon: <img src="" alt="N/A" />,
			};
	}
};

export const ActionButton = ({
	onlyIcon = false,
	variant,
	...otherProps
}: ActionButtonProps) => {
	const { name, icon } = getVariant(variant);
	return (
		<CustomButton {...otherProps}>
			{icon}
			{!onlyIcon && name}
		</CustomButton>
	);
};

const CustomButton = styled.button(
	({ theme: { palette, typography, misc } }) => ({
		cursor: "pointer",
		display: "inline-flex",
		gap: "8px",
		border: misc.border,
		borderRadius: "4px",
		color: palette.button.action.main,
		fontWeight: typography.weight.medium,
		fontSize: "14px",
		padding: "7px",
		background: palette.common.white,
		boxShadow: "0px 1px 2px 0px rgba(45, 55, 72, .08)",
		height: "32px",
		width: "fit-content",
		"&:hover": {
			border: "1px solid #d3ddeb",
			boxShadow: "0px 1px 2px 0px rgba(45, 55, 72, .1)",
		},
	})
);
