import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
	selectAllUsers,
	deselectAllUsers,
	sortUsers,
} from "../../redux/features/users/userSlice";
import arrow from "../../assets/icons/arrow.svg";
import { CheckBox } from "../../components/CheckBox";
import styled from "styled-components";

export const LabelSection = () => {
	const dispatch = useAppDispatch();
	const {
		sort: { byRole },
	} = useAppSelector((state) => state.userState);

	const selectAllHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			return dispatch(selectAllUsers());
		}
		dispatch(deselectAllUsers());
	};

	const sortUsersHandler = () => {
		dispatch(sortUsers(byRole === "ascended" ? "descended" : "ascended"));
	};

	return (
		<LabelSectionContainer>
			<SelectAllContainer>
				<CheckBox id="select-all-users" onChange={selectAllHandler} />
				<CustomLabel htmlFor="select-all-users">User</CustomLabel>
			</SelectAllContainer>
			<SortContainer>
				<CustomLabel htmlFor="sort-arrow">Permission</CustomLabel>
				<SortButton id="sort-arrow" onClick={sortUsersHandler}>
					<img
						src={arrow}
						alt="sort-arrow"
						style={{
							transform: byRole === "ascended" ? "rotate(180deg)" : "rotate(0)",
						}}
					/>
				</SortButton>
			</SortContainer>
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

const SortContainer = styled.div(() => ({
	width: "278px",
	display: "inline-flex",
	alignItems: "center",
	gap: "4px",
}));

const SortButton = styled.button(() => ({
	height: "12px",
	width: "12px",
	padding: "none",
	border: "none",
	background: "none",
	cursor: "pointer",
}));

const CustomLabel = styled.label(({ theme: { palette, typography } }) => ({
	color: palette.paragraph.label,
	fontSize: "12px",
	fontWeight: typography.weight.medium,
}));
