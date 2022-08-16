import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
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
		newUser: '/', // New users will be directed here on first sign in (leave the property out if not of interest)
	},
});
