import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			type: "credentials",
			credentials: {},
			async authorize(credentials, req) {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};
				let user = {};

				await fetch("https://httpbin.org/post", {
					method: "POST",
					body: JSON.stringify({
						username: "yoon",
						password: "1234",
					}),
				})
					.then((res) => {
						res.json();
					})
					.then((data) => {
						console.log(data);
						user = {
							name: "data",
						};
					});

				return { ...user, id: "test" };
			},
		}),
	],
	pages: {
		signIn: "/auth/signin",
		error: "/auth/error",
		signOut: "/auth/signout",
	},
	callbacks: {
		async jwt({ token, account }) {
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token, user }) {
			// Send properties to the client, like an access_token from a provider.
			//session.accessToken = token.accessToken;
			return session;
		},
	},
};

export default NextAuth(authOptions);
