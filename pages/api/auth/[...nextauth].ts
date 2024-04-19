import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

import prisma from '@/app/libs/prismadb';


export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		// Auth With Google
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
		}),

		// Auth With Email & Password
		CredentialsProvider({
			name: "credentials",
			credentials: {
				email: { label: "email", type: "text" },
				password: { label: "password", type: "password" },
			}, async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error('Empty Fields');
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email
					}
				});

				if (!user || !user?.hashedPassword) {
					throw new Error('Invalid credentials');
				}

				const isCorrectPassword = await bcrypt.compare(
					credentials.password,
					user.hashedPassword
				);

				if (!isCorrectPassword) {
					throw new Error('Invalid credentials');
				}
				console.log("======", user);

				if (user.email === 'admin@rajhotel.com' && user.role === 'admin') {
					// if user is admin then set admin in localstorage


					// localStorage.setItem('admin', 'true')
				}
				return user;

			}
		})
	],
	pages: {
		signIn: "/",
	},
	debug: process.env.NODE_ENV === "development",
	session: {
		strategy: "jwt",
	}, secret: process.env.NEXTAUTH_SECRET,
}


export default NextAuth(authOptions)