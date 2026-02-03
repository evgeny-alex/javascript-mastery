export const authConfig = {
  secret: process.env.AUTH_SECRET,
  providers: [],
  pages: {
    error: "/auth/error",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Preserve explicit relative paths (including "/") — landing or any other relative callback
      if (typeof url === "string" && url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }

      // If an absolute URL from the same origin is provided, allow it
      try {
        if (typeof url === "string") {
          const parsed = new URL(url);
          if (parsed.origin === baseUrl) {
            return url;
          }
        }
      } catch (e) {
        // ignore invalid URL
      }

      // Fallback: redirect to landing page
      return baseUrl;
    },
  },
};
