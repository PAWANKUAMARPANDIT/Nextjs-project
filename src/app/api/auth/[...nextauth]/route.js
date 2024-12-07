import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authenticateUser } from '../Login/route';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'email@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = await authenticateUser(credentials.email, credentials.password);

        if (user) {
          return { 
            id: user.id, 
            email: user.email, 
            buyingOption: user.buyingOption || false 
          };
        }
        return null;
      }
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.buyingOption = token.buyingOption;
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.buyingOption = user.buyingOption;
      }
      return token;
    }
  },

  pages: {
    signIn: '/signin',
    signUp: '/signup',
    login: '/',
    about: '/about',
    blog: '/blog*',
    payment: '/payment',
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
