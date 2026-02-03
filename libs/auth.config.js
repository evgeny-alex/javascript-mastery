import config from "@/config";

export const authConfig = {
  secret: process.env.AUTH_SECRET,
  providers: [],
  pages: {
    error: "/auth/error",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Preserve explicit relative paths (including "/") — normally keep as-is
      if (typeof url === "string" && url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }

      // If the provider returned the site root or an internal auth callback URL,
      // consider this a sign-in completion and redirect to configured dashboard callback.
      if (
        typeof url === "string" &&
        (url === baseUrl ||
          url === `${baseUrl}/` ||
          url === "/" ||
          url.includes("/api/auth/callback") ||
          url.includes("/api/auth/signin"))
      ) {
        return `${baseUrl}${config.auth.callbackUrl}`;
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
