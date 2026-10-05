import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  // The old Gatsby site had separate Projects and Research pages
  async redirects() {
    return [
      { source: "/projects/:path*", destination: "/work#projects", permanent: true },
      { source: "/research/:path*", destination: "/work#research", permanent: true },
    ];
  },
};

export default nextConfig;
