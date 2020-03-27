const path = require('path');
const withMDX = require('@next/mdx')();

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  include: path.resolve(__dirname, 'src/assets/svg'),
  webpack: config => {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    );
    return config;
  },
});
