import { useSelector } from "react-redux";
import { FixedSizeList as List } from "react-window";
import styled from "styled-components";
import { ListHeader } from "./ListHeader";
import { UserRow } from "./UserRow";

export const UserList = () => {
	const users = useSelector((state: any) => state.userState.users);
	return (
		<ListContainer>
			<ListHeader />
			<List height={624} itemCount={users.length} itemSize={64} width={684}>
				{({ index, style }) => {
					return <UserRow index={index} style={style} user={users[index]} />;
				}}
			</List>
		</ListContainer>
	);
};

const ListContainer = styled.div(({ theme }) => ({
	height: "726px",
	width: "716px",
	padding: "16px",
	background: theme.white,
	margin: "auto",
	borderRadius: "8px",
}));
