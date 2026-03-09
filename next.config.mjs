/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [

      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "flagsapi.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/**',
      },
    ],
  },
  allowedDevOrigins: ["127.0.0.1:3000"],
};

export default nextConfig;