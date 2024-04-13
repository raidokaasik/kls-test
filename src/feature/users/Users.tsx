import { useAppSelector } from "../../redux/hooks";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import styled from "styled-components";
import { UserRow } from "./UserRow";
import { ActionSection } from "./ActionSection";
import { filteredUsers } from "./utils";
import { LabelSection } from "./LabelSection";
import { User } from "../../types";

const LIST_HEIGHT = 624;
const LIST_WIDTH = 684;
const ROW_HEIGHT = 64;

const ItemRenderer = ({
	index,
	data,
	style,
}: ListChildComponentProps<User[]>) => {
	const user = data[index];
	return <UserRow style={style} user={user} />;
};

export const Users = () => {
	const { users, searchTerm } = useAppSelector((state) => state.userState);
	const usersFound = filteredUsers(users, searchTerm);

	return (
		<ListContainer>
			<ActionSection />
			<LabelSection />
			<List
				itemData={usersFound}
				height={LIST_HEIGHT}
				itemCount={usersFound.length}
				itemSize={ROW_HEIGHT}
				width={LIST_WIDTH}
			>
				{ItemRenderer}
			</List>
		</ListContainer>
	);
};

const ListContainer = styled.div(({ theme: { palette } }) => ({
	height: "726px",
	width: "716px",
	padding: "24px 16px 16px 16px",
	background: palette.common.white,
	margin: "auto",
	borderRadius: "8px",
}));
