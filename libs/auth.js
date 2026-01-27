import NextAuth from "next-auth";
import Resend from "next-auth/providers/resend";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongo";

const config = {
  providers: [
    Resend({
      apiKey: process.env.RESEND_API_KEY,
      from: "noreply@reachthegoal.org",
      name: "Email",
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/dashboard/user`;
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
