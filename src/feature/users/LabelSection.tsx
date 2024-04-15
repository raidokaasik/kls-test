import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
	selectAllUsers,
	deselectAllUsers,
	sortUsers,
} from "@/redux/features/users/userSlice";
import arrow from "@/assets/icons/arrow.svg";
import { CheckBox } from "@/components/CheckBox";
import styled from "styled-components";
import { useState } from "react";

type SortArrowProps = {
	order: string;
};
const SortArrow = ({ order }: SortArrowProps) => {
	return (
		<img
			src={arrow}
			alt="sort-arrow"
			style={{
				transform: order === "descended" ? "rotate(180deg)" : "rotate(0)",
			}}
		/>
	);
};

export const LabelSection = () => {
	const [showPermissionSort, setShowPermissionSort] = useState<boolean>(false);
	const [showUserSort, setShowUserSort] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const {
		sort: { order: sortOrder, by: sortBy },
	} = useAppSelector((state) => state.userState);

	const selectAllHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			return dispatch(selectAllUsers());
		}
		dispatch(deselectAllUsers());
	};

	const sortUsersHandler = (value: "role" | "name") => {
		const order = sortOrder[value] === "ascended" ? "descended" : "ascended";
		dispatch(
			sortUsers({
				by: value,
				order: {
					...sortOrder,
					[value]: order,
				},
			})
		);
	};

	const showPermissionSortArrow = showPermissionSort || sortBy === "role";
	const showUserSortArrow = showUserSort || sortBy === "name";

	return (
		<LabelSectionContainer>
			<SelectAllContainer>
				<CheckBox id="select-all-users" onChange={selectAllHandler} />
				<SortButton
					id="sort-arrow-users"
					onClick={() => sortUsersHandler("name")}
					onMouseEnter={() => setShowUserSort(true)}
					onMouseLeave={() => setShowUserSort(false)}
				>
					<CustomLabel>User</CustomLabel>
					{showUserSortArrow && <SortArrow order={sortOrder.name} />}
				</SortButton>
			</SelectAllContainer>
			<SortButton
				id="sort-arrow-permission"
				onClick={() => sortUsersHandler("role")}
				onMouseEnter={() => setShowPermissionSort(true)}
				onMouseLeave={() => setShowPermissionSort(false)}
			>
				<CustomLabel>Permission</CustomLabel>
				{showPermissionSortArrow && <SortArrow order={sortOrder.role} />}
			</SortButton>
		</LabelSectionContainer>
	);
};

const LabelSectionContainer = styled.div(() => ({
	paddingLeft: "16px",
	display: "inline-flex",
	width: "100%",
	height: "18px",
	marginBottom: "4px",
}));

const SelectAllContainer = styled.div(() => ({
	width: "385px",
	display: "inline-flex",
	gap: "12px",
	alignItems: "center",
}));

const SortButton = styled.button(() => ({
	height: "20px",
	width: "fit-content",
	padding: 0,
	border: 0,
	background: "none",
	alignItems: "center",
	display: "inline-flex",
	gap: "4px",
	cursor: "pointer",
}));

const CustomLabel = styled.p(({ theme: { palette, typography } }) => ({
	color: palette.paragraph.label,
	fontSize: "12px",
	fontWeight: typography.weight.medium,
}));
