// webpack.config.js
const path = require('path');

module.exports = {
  // ... other webpack settings ...

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  }
  
};
