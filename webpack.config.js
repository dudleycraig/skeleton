const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

process.stdout.write('----------------------------------------------------------------\n');
process.stdout.write('---                skeleton, webpack scripts                 ---\n');
process.stdout.write('---                                                          ---\n');
process.stdout.write('---                                                          ---\n');
process.stdout.write('---                                                          ---\n');
process.stdout.write('----------------------------------------------------------------\n');

module.exports = {
  entry: { 
    index: path.resolve(__dirname, 'src/frontend/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    publicPath: ''
  },
  mode: 'development',
  target: 'web',
  watch: true,
  resolve: {
    modules: [ 'node_modules', path.resolve(__dirname, 'src/frontend'), path.resolve(__dirname, 'vendor/frontend') ],
    extensions: [ '*', '.js', '.jsx', '.json', '.css', '.scss' ]
  },
  devtool: 'source-map', 
  plugins: [ 
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    /**
    new HtmlWebpackPlugin({ 
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true
    }),
     **/
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({ 
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [ path.resolve(__dirname, 'src') ],
        use: [
          { loader: 'babel-loader', query: { presets: ['stage-3', 'react'] } }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        include: [ 
          path.resolve(__dirname, 'node_modules/bootstrap/scss'),
          // path.resolve(__dirname, 'node_modules/font-awesome/scss'),
          path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free/scss'),
          path.resolve(__dirname, 'src/frontend/styles') 
        ],
        use: [
          // { loader: MiniCssExtractPlugin.loader, options: { publicPath: '/' } },
          { loader: 'style-loader' }, 
          { loader: 'css-loader', options: { module: true } }, // translate css into js 
          { loader: 'postcss-loader', options: { plugins: () => [ require('autoprefixer')({ 'browsers': ['> 1%', 'last 2 versions']}) ]} },
          { loader: 'sass-loader' } // compiles sass/scss to css 
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [ { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'images/' } } ] 
      },
      {
        test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/i,
        use: [ { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'images/' } } ] 
      },
      {
        test: /.(woff(2)?)(\?v=\d+\.\d+\.\d+)?$/i,
        use: [ { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'fonts/', publicPath: '../fonts' } } ] 
      },
      {
        test: /.(ttf)(\?v=\d+\.\d+\.\d+)?$/i,
        use: [ { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'fonts/', publicPath: '../fonts' } } ] 
      },
      {
        test: /.(eot)(\?v=\d+\.\d+\.\d+)?$/i,
        use: [ { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: 'fonts/', publicPath: '../fonts' } } ] 
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    inline: true,
    hot: true,
    host: 'skeleton.local',
    port: 8080
  }
};
