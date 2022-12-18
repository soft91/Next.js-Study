import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Page() {
	const { data: session, status } = useSession();

	useEffect(() => {
		console.log(session);
	}, [session]);

	return (
		<div>
			<span>Name: {session?.user.name}</span>
			<span>Email: {session?.user.email}</span>
		</div>
	);
}
