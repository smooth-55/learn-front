
/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: "dist",
  trailingSlash: true,
  basePath: "",
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "/",
  },
};

export default nextConfig;
