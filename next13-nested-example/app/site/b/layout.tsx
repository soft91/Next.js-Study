"use client";

import { NestedLayout } from "@/components";

const MealLayout = ({ children }: { children: React.ReactNode }) => {
	return <NestedLayout>{children}</NestedLayout>;
};

export default MealLayout;
