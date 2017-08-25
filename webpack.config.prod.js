const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'source-map',
   devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    },

  entry: ['babel-regenerator-runtime', "webpack-hot-middleware/client?reload=true", './src/index.js'],
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      title: 'My App',
      template: './HtmlCss/index.html'
    }),
    new  webpack.DefinePlugin({
            'process.env':  {
                'NODE_ENV':  JSON.stringify('production')
            }
        }) ,
    new webpack.HotModuleReplacementPlugin(),


  ],
  module: {
    loaders: [
      {
        test: /.js?$/,
        loaders: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,

        loader: [{
          loader: 'style-loader'
        },
        {
          loader: 'css-loader'
        }
        ]

      },
      {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    'file-loader'
                ]
            }

    ]
  },
};