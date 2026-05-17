/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Unsplash CDN - for content photography
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Wix static - used by sanisetfleet for product photos.
      // We hotlink a few while we wait for EcoBoom's own product shots.
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
      },
      // Meyer Sound / RocketCDN - product photography from meyersound.com
      {
        protocol: "https",
        hostname: "3ca9a566.delivery.rocketcdn.me",
      },
      {
        protocol: "https",
        hostname: "meyersound.com",
      },
      // L-Acoustics - product photography from l-acoustics.com
      {
        protocol: "https",
        hostname: "www.l-acoustics.com",
      },
    ],
  },
};

export default nextConfig;
