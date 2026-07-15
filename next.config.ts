import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  /* જો તમારે બીજા કોઈ ઓપ્શન ઉમેરવા હોય તો અહીં ઉમેરી શકો છો */
};

export default nextConfig;