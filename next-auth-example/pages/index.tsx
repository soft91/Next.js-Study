import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { loginAtom } from "../recoil/index";

export default function Page() {
	const { data: session, status } = useSession();
	const usernameInfo = useRecoilValue(loginAtom);

	useEffect(() => {
		console.log(session);
		console.log(usernameInfo);
	}, [session, usernameInfo]);

	return (
		<div>
			<p>{usernameInfo.username}</p>
			{/* <span>Name: {session?.user.name}</span> */}
			<span>Email: {session?.user.email}</span>
		</div>
	);
}
