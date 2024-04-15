import { useDispatch } from "react-redux";
import { setSearchBy } from "@/redux/features/users/userSlice";
import { Button } from "@/components/Button";
import { TextField } from "@/components/TextField";
import styled from "styled-components";

export function PageHeader() {
	const dispatch = useDispatch();

	function searchFieldHandler(e: React.ChangeEvent<HTMLInputElement>) {
		dispatch(setSearchBy(e.target.value));
	}

	return (
		<PageHeaderContainer>
			<Title>Account Users</Title>
			<PageHeaderActions>
				<TextField onChange={searchFieldHandler} placeholder="Search" />
				<Button>Connect Users</Button>
			</PageHeaderActions>
		</PageHeaderContainer>
	);
}

const PageHeaderActions = styled.div({
	gap: "12px",
	display: "inline-flex",
});

const PageHeaderContainer = styled.div({
	width: "100%",
	display: "inline-flex",
	marginBottom: "18px",
	justifyContent: "space-between",
	alignItems: "center",
});

const Title = styled.p(({ theme: { palette } }) => ({
	fontSize: "18px",
	fontWeight: "500",
	color: palette.paragraph.primary,
}));
