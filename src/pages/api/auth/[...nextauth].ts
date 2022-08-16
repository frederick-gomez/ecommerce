import NextAuth, { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	debug: true,
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID!,
			clientSecret: process.env.GITHUB_SECRET!,
		}),
	],
	pages: {
		signIn: '/auth/signin',
		// error: '/error', // Error code passed in query string as ?error=
	},
	session: {
		strategy: 'database',
		// Seconds - How long until an idle session expires and is no longer valid.
		maxAge: 5 * 24 * 60 * 60, // 30 days
		// Seconds - Throttle how frequently to write to database to extend a session.
		updateAge: 24 * 60 * 60, // 24 hours
	},
};

export default NextAuth(authOptions);