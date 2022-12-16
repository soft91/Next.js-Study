import { NextPage } from "next";
import { FormEventHandler, useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

interface Props {}

const Signin: NextPage = (props): JSX.Element => {
	const [userInfo, setUserInfo] = useState({
		username: "",
		password: "",
	});
	const { data: session } = useSession();

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		const res = await signIn("credentials", {
			email: userInfo.username,
			password: userInfo.password,
			redirect: false,
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Login</h1>
				<input
					type="text"
					placeholder="yoon"
					value={userInfo.username}
					onChange={(e) =>
						setUserInfo((prev) => ({
							...prev,
							username: e.target.value,
						}))
					}
				/>
				<input
					type="password"
					placeholder="*******"
					value={userInfo.password}
					onChange={(e) =>
						setUserInfo((prev) => ({
							...prev,
							password: e.target.value,
						}))
					}
				/>
				<input type="submit" value="Login" />
			</form>
		</div>
	);
};

export default Signin;
