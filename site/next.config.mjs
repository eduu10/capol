/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGithubPages ? '/capol' : '',
  assetPrefix: isGithubPages ? '/capol/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
