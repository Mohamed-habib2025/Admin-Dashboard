/** @type {import('next').NextConfig} */
const nextConfig = {

  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "images.samsung.com",
      },
      {
        protocol: "https",
        hostname: "store.storeimages.cdn-apple.com",
      },
      {
        protocol: "https",
        hostname: "www.apple.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "assets.adidas.com",
      },
      {
        protocol: "https",
        hostname: "static.nike.com",
      },
      {
        protocol: "https",
        hostname: "ssl-product-images.www8-hp.com",
      },
      {
        protocol: "https",
        hostname: "i.dell.com",
      },
      {
        protocol: "https",
        hostname: "www.lg.com",
      },
      {
        protocol: "https",
        hostname: "www.rolex.com",
      },
      {
        protocol: "https",
        hostname: "static.zara.net",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
