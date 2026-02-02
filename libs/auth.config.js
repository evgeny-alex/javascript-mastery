export const authConfig = {
  secret: process.env.AUTH_SECRET,
  providers: [],
  pages: {
    error: "/auth/error",
  },
  callbacks: {
    async redirect({ baseUrl }) {
      return `${baseUrl}/dashboard/user`;
    },
  },
};