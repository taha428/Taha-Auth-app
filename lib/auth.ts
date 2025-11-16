import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

if (!process.env.AUTH_SECRET) {
  throw new Error("AUTH_SECRET environment variable is not set");
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  secret: process.env.AUTH_SECRET,
  debug: false
});
