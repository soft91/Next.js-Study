import React, { ReactNode } from "react";

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const NestedLayout = ({ children }: { children: ReactNode }) => {
	return <Container>{children}</Container>;
};

export default NestedLayout;
