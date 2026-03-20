import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/maitrise-oeuvre/villa-contemporaine-reunion',
        destination: '/',
        permanent: true,
      },
      {
        source: '/maitrise-oeuvre/lodge-luxe-reunion',
        destination: '/services/projets-envergure',
        permanent: true,
      },
      {
        source: '/maitrise-oeuvre/promoteurs-reunion',
        destination: '/services/projets-envergure',
        permanent: true,
      },
      {
        source: '/maitrise-oeuvre/renovation-complete-974',
        destination: '/services/renovation-complete',
        permanent: true,
      },
      {
        source: '/maitrise-oeuvre/extension-maison-reunion',
        destination: '/services/extension-sur-mesure',
        permanent: true,
      },
      {
        source: '/maitrise-oeuvre/amenagement-exterieur-reunion',
        destination: '/services/amenagement-exterieur',
        permanent: true,
      },
      {
        source: '/maitrise-oeuvre/maison-container-974',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
