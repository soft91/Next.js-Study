import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			type: "credentials",
			credentials: {},
			async authorize(credentials, req) {
				const { username, password } = credentials as {
					username: string;
					password: string;
				};

				return { id: username, name: username };
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
			console.log(user);
			return session;
		},
	},
};

export default NextAuth(authOptions);
