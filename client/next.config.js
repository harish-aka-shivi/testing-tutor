const path = require('path');

module.exports = {
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
};
