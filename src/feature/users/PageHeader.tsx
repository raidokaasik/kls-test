import { useDispatch } from "react-redux";
import { setSearchBy } from "../../redux/features/users/userSlice";
import { Button } from "../../components/Button";
import { TextField } from "../../components/TextField";
import styled from "styled-components";

export function PageHeader() {
	const dispatch = useDispatch();

	function searchFieldHandler(e: React.ChangeEvent<HTMLInputElement>) {
		dispatch(setSearchBy(e.target.value));
	}

	return (
		<div
			style={{
				width: "100%",
				display: "inline-flex",
				marginBottom: "18px",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Title>Account Users</Title>
			<div style={{ gap: "12px", display: "inline-flex" }}>
				<TextField onChange={searchFieldHandler} placeholder="Search" />
				<Button buttonType="primary">Connect Users</Button>
			</div>
		</div>
	);
}

const Title = styled.p(({ theme: { palette } }) => ({
	fontSize: "18px",
	fontWeight: "500",
	color: palette.paragraph.primary,
}));
