/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // The project uses the new ESLint flat-config; don't fail production builds on lint.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
