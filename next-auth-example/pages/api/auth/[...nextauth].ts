import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
	session: {
		strategy: "jwt",
		maxAge: 24 * 60 * 60,
		updateAge: 2 * 24 * 60 * 60,
	},
	providers: [
		// GithubProvider({
		//   clientId: process.env.GITHUB_ID,
		//   clientSecret: process.env.GITHUB_SECRET,
		// }),
		// GoogleProvider({
		//   clientId: process.env.GOOGLE_ID,
		//   clientSecret: process.env.GOOGLE_SECRET,
		// }),
		CredentialsProvider({
			name: "Credentials",
			type: "credentials",
			credentials: {},
			authorize(credentials, req) {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};
				if (email !== "yoon@gmail.com" && password !== "1234") {
					return null;
				}

				return { id: "1234", name: "Yoon", email: "yoon@gmail.com" };
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
