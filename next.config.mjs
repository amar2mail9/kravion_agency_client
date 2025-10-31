/** @type {import('next').NextConfig} */
const nextConfig = {

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

export default nextConfig;

