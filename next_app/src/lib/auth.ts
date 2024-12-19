import createUserIfNoExists from "@/actions/user_actions";
import NextAuth, { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";

export const authConfig: NextAuthConfig = {
  providers: [GitHub],
  secret: process.env["AUTH_SECRET"],
  events: {
    signIn: async ({ user }) => {
      const { email, name } = user;
      const data = { name, email };
      await createUserIfNoExists({ data });
    },
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.email = user.email;
        return token;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user.email = token.email ?? "";
      return session;
    },
  },
};
export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
