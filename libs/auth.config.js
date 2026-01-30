export const authConfig = {
  secret: process.env.AUTH_SECRET,
  providers: [],
  callbacks: {
    async redirect({ baseUrl }) {
      return `${baseUrl}/dashboard/user`;
    },
  },
};
