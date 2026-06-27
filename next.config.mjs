/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/chargefast' : '',
  assetPrefix: isGithubPages ? '/chargefast/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? '/chargefast' : '',
  },
};

export default nextConfig;
