import NextAuth, { NextAuthOptions } from "next-auth";
import instance from "../../../utils/instance";
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
				const { username, password } = credentials as {
					username: string;
					password: string;
				};
				let user = {};

				await instance
					.post("https://httpbin.org/post", {
						username,
						password,
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
			if (account) {
				token.accessToken = account.access_token;
			}
			return token;
		},
		async session({ session, token, user }) {
			if (token) {
				session.user.accessToken = token.accessToken as string;
			}
			return session;
		},
	},
};

export default NextAuth(authOptions);
