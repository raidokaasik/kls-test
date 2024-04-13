import styled from "styled-components";

export type Role = "admin" | "account_manager" | "agent" | "external_reviewer";
interface UserRoleProps extends React.HTMLAttributes<HTMLDivElement> {
	variant: Role;
}

export const UserRole = ({ variant }: UserRoleProps) => {
	const { backgroundColor, fontColor, text } = getRoleConfig(variant);
	return (
		<RoleContainer $backg={backgroundColor}>
			<span
				style={{
					fontWeight: "500",
					fontSize: "12px",
					color: fontColor,
				}}
			>
				{text}
			</span>
		</RoleContainer>
	);
};

type RoleContainerProps = {
	$backg: string;
};
const RoleContainer = styled.div<RoleContainerProps>(({ $backg }) => ({
	height: "24px",
	padding: "3px 8px",
	borderRadius: "4px",
	display: "inline-flex",
	alignItems: "center",
	background: $backg,
}));

const defaultRoleConfig = {
	backgroundColor: "none",
	fontColor: "#000",
	text: "N/A",
};

const getRoleConfig = (variant: Role) => {
	switch (variant) {
		case "admin":
			return {
				backgroundColor: "#EFE2FE",
				fontColor: "#574195",
				text: "Admin",
			};
		case "account_manager":
			return {
				backgroundColor: "#FEDDE6",
				fontColor: "#922B6C",
				text: "Account manager",
			};
		case "agent":
			return {
				backgroundColor: "#C8E7F9",
				fontColor: "#2C5282",
				text: "Agent",
			};
		case "external_reviewer":
			return {
				backgroundColor: "#FEEBC8",
				fontColor: "#91472C",
				text: "External reviewer",
			};
		default:
			return defaultRoleConfig;
	}
};
