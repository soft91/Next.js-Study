"use client";

import { NestedLayout } from "@/components";

const BLayout = ({ children }: { children: React.ReactNode }) => {
	return <NestedLayout>{children}</NestedLayout>;
};

export default BLayout;
