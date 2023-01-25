import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { loginAtom } from "../recoil/index";

export default function Page() {
	const { data: session, status } = useSession();
	const usernameInfo = useRecoilValue(loginAtom);
	const [username, setUsername] = useState();

	useEffect(() => {
		setUsername(usernameInfo.username);
	}, [session, usernameInfo]);

	return (
		<div>
			<p>{username}</p>
			{/* <span>Name: {session?.user.name}</span> */}
			<span>Email: {session?.user.email}</span>
		</div>
	);
}
