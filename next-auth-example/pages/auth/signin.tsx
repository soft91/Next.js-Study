import { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import { signIn } from "next-auth/react";

const Signin: NextPage = (): JSX.Element => {
	const [userInfo, setUserInfo] = useState({
		username: "",
		password: "",
	});

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		await signIn("credentials", {
			email: userInfo.username,
			password: userInfo.password,
			redirect: false,
		}).then((res) => {
			if (res?.ok) console.log(res.ok);
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h1>Login</h1>
				<input
					type="text"
					placeholder="ID"
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
