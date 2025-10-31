/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// next.config.js
export default {
  async headers() {
    return [
      {
        source: '/sitemap.xml',
        headers: [
          { key: 'Content-Type', value: 'application/xml' },
          { key: 'Cache-Control', value: 'no-cache' },
        ],
      },
    ];
  },
};
