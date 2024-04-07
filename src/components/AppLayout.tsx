import styled from "styled-components";

type PageLayoutProps = {
	children: JSX.Element | JSX.Element[];
};

export const AppLayout = ({ children }: PageLayoutProps) => {
	return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div({
	width: "100%",
	height: "100vh",
	background: "#E5E5E5",
	display: "flex",
	paddingTop: "30px",
	paddingBottom: "30px",
	justifyContent: "center",
	overflow: "auto",
});
