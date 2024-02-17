/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['commondatastorage.googleapis.com'],
      },
      async headers() {
        return [
          {
            source: '/:all*(jpg)',
            locale: false,
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=9999999999, must-revalidate',
              }
            ],
          },
        ]
      },
};

export default nextConfig;
