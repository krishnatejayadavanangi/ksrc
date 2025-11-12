/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Disable lightningcss to fix Vercel build issues
  experimental: {
    optimizeCss: false,
  },

  // ✅ You can keep this empty for now, or customize later
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
