/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimized for Vercel deployment
  images: {
    domains: [], // Add any external image domains here if needed
    formats: ['image/webp', 'image/avif'],
  },
  // Enable compression
  compress: true,
  // Optimize for production
  swcMinify: true,
  // Enable experimental features - disabled optimizeCss due to critters dependency issue
  experimental: {
    // optimizeCss: true, // Disabled temporarily for deployment
  },
  // Ensure proper static generation
  trailingSlash: false,
  // Enable React strict mode
  reactStrictMode: true,
};

export default nextConfig;