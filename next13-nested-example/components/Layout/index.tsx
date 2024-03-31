"use client";

import React, { ReactNode, useCallback, useEffect } from "react";
import styled from "styled-components";
import {
	NavBar,
	Header,
	Breadcrumb,
	Typography,
	Toast,
	Alert,
} from "@/components";
import { MemberModal, MemoModal, PetDetailModal } from "@/components/Modal";
import { usePathname } from "next/navigation";
import useModal from "@/hooks/useModal";
import { getSession, signOut } from "next-auth/react";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	main {
		display: flex;
		flex-grow: 1;
		overflow: auto;
	}
	.content {
		flex-grow: 1;
		padding: 3rem;
	}
`;

const ContentWrap = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	position: relative;
`;

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<Container>
			<Header />
			<main>
				<div className="content">{children}</div>
			</main>
		</Container>
	);
};

export default Layout;
