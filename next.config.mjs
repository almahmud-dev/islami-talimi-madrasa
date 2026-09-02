/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.islamicmissionschool.com",
      },
      {
        protocol: "https",
        hostname: "www.risingbd.com",
      },
      {
        protocol: "https",
        hostname: "asset.news24bd.tv",
      },
      {
        protocol: "https",
        hostname: "dntakhsisimadrasah.com",
      },
      {
        protocol: "https",
        hostname: "ecdn.dhakatribune.net",
      },
      {
        protocol: "https",
        hostname: "qubahouston.org",
      },
      {
        protocol: "https",
        hostname: "cdn.moumachi.com.bd",
      },
    ],
  },
};

export default nextConfig;
