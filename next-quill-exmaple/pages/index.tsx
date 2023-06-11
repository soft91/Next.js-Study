import type { NextPage } from "next";
import Editor from "./components/Editor";
import { useState } from "react";

const Home: NextPage = () => {
	const [state, setState] = useState<string>("");

	return (
		<div>
			<Editor value={state} onChange={setState} />
		</div>
	);
};

export default Home;
