const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: ['./scripts/main.ts', './css/site.scss']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'file',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
        },
      },
    },
  },
  output: {
    publicPath: 'dist/',
    path: path.join(__dirname, '../wwwroot/dist/'),
    filename: devMode || true ? '[name].bundle.js' : '[name].[contenthash].js',
    chunkFilename: devMode || true ? '[name].bundle.js' : '[name].[contenthash].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode || true ? '[name].bundle.css' : '[name].[contenthash].css',
      chunkFilename: devMode || true ? '[id].bundle.css' : '[id].[contenthash].css',
    })
  ]
};
