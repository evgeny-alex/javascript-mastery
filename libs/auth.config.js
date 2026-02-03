export const authConfig = {
  secret: process.env.AUTH_SECRET,
  providers: [],
  pages: {
    error: "/auth/error",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // If an explicit relative path is provided (e.g. "/" or "/dashboard"), preserve it
      if (typeof url === "string" && url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }

      // If a full URL is provided and matches our origin, allow it
      try {
        if (typeof url === "string") {
          const parsed = new URL(url);
          if (parsed.origin === baseUrl) return url;
        }
      } catch (e) {
        // ignore invalid URL
      }

      // Fallback: default landing for signed-in users
      return `${baseUrl}/dashboard/user`;
    },
  },
};
