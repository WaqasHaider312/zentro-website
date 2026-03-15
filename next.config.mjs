/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.zentrodesk.com' }],
        destination: 'https://zentrodesk.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig