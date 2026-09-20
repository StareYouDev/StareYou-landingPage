import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Static HTML export: required for plain (non-Node.js) cPanel hosting.
  // Produces a fully static `out/` folder that can be uploaded as-is.
  output: "export",
  // Emits `/path/index.html` instead of `/path.html`, which matches how
  // Apache resolves directory requests on cPanel (via DirectoryIndex).
  trailingSlash: true,
  images: {
    // The Next.js Image Optimization API needs a Node.js server, which
    // isn't available on static cPanel hosting, so images are served as-is.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
      },
      {
        protocol: "https",
        hostname: "notion-avatars.netlify.app",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
