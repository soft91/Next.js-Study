import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}: AppProps) {
	return (
		<SessionProvider session={session} refetchInterval={5 * 60}>
			<RecoilRoot>
				<Component {...pageProps} />
			</RecoilRoot>
		</SessionProvider>
	);
}
