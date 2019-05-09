const webpack = require('webpack');
const path = require('path');

const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const autoprefixer = require('autoprefixer');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const jsSourcePath = path.join(__dirname, './source/js');
const buildPath = path.join(__dirname, './dist');
const imgPath = path.join(__dirname, './public/images/');
const fontsPath = path.join(__dirname, './public/fonts/');
const sourcePath = path.join(__dirname, './source');
const stylesPath = path.join(__dirname, './source/scss');
const jsResourcePath = path.join(__dirname, './resources/js')

//const configFile = require('./config/config.js');

const COMMON_STYLE_LOADERS = isProduction ?
  ['sass-loader?sourceMap', 'postcss-loader'] : ['sass-loader?sourceMap', 'postcss-loader'];
const CSS_LOADER = 'css-loader';
const CSS_LOADER_WITH_MODULES = isProduction ?
  'css-loader?module&minimize&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]' :
  'css-loader?module&sourceMap&importLoaders=1&localIdentName=[name]_[local]__[hash:base64:5]';

const getStyleLoaders = (shouldUseCSSModules) => {
  const cssLoder = shouldUseCSSModules ? CSS_LOADER_WITH_MODULES : CSS_LOADER;
  return COMMON_STYLE_LOADERS.concat(cssLoder).reverse().join('!');
};

// Common plugins
const plugins = [
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-[hash].js',
    minChunks(module) {
      const context = module.context;
      return context && context.indexOf('node_modules') >= 0;
    },
  }),
  new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$|\.css$|\.html$/,
    threshold: 10240,
    minRatio: 0,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    }/*,
    endpoints: JSON.stringify(configFile.endpoints),
    envHost: JSON.stringify(configFile.envHost),
    if1Pw3: JSON.stringify(configFile.if1Pw3),
    GMAPS_KEY: JSON.stringify(configFile.GMAPS_KEY)
    */
  }),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(sourcePath, 'index.html'),
    path: buildPath,
    filename: 'index.html',
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer({
          browsers: [
            'last 3 version',
            'ie >= 11',
          ],
        }),
      ],
      context: sourcePath,
    },
  })  
];

// Common rules
const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
    include: fontsPath,
    use: 'url-loader?limit=20480&name=public/fonts/[name]-[hash].[ext]',
  },
  {
    test: /\.(svg)$/,
    include: iconPath,
    use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
  },
  {
    test: /\.(png|gif|jpg|svg)$/,
    include: imgPath,
    use: 'url-loader?limit=20480&name=public/images/[name]-[hash].[ext]',
  },
  {
    test: /\.scss$/,
    /*include: [
        path.join(__dirname, '/source/scss/')
    ],*/
    exclude: [path.join(__dirname, './node_modules/'), jsSourcePath],
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: getStyleLoaders(false),
    })
  },
  {
    test: /\.scss$/,
    /*include: [
        path.join(__dirname, '/source/js/')
    ],*/
    exclude: [path.join(__dirname, './node_modules/'), stylesPath],
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: getStyleLoaders(true),
    })
  },
];

if (isProduction) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        screw_ie8: true,
      },
      compress: {
        drop_debugger: true,
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        booleans: true,
        drop_console: true,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    }),
    new ExtractTextPlugin('style-[hash].css'),    
    new CopyWebpackPlugin([
      {
        from: jsResourcePath,
        to: path.join(buildPath, 'resources/js'),
        toType: 'dir'
      }
    ])
  );
} else {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new ExtractTextPlugin('style-[hash].css'),
    new CopyWebpackPlugin([
      {
        from: 'config/config.js',
        to: path.join(buildPath, 'config/'),
        toType: 'dir'
      },
      {
        from: jsResourcePath,
        to: path.join(buildPath, 'resources/js'),
        toType: 'dir'
      }
    ])
  );
}

const config = {
  devtool: isProduction ? false : 'hidden-source-maps ',
  context: jsSourcePath,
  entry: {
    js: './index.js',
  },
  output: {
    path: buildPath,
    publicPath: "http://localhost:47825/",//configFile.envHost,
    filename: 'app-[hash].js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      jsSourcePath,
      stylesPath,
    ],
    alias: {
      config: path.resolve(__dirname, 'config/config.js')
    }
  },
  plugins,
  devServer: {
    contentBase: buildPath,
    historyApiFallback: true,
    port: 47825,
    compress: isProduction,
    disableHostCheck: true,
    inline: !isProduction,
    hot: !isProduction,
    host: '127.0.0.1',
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  }/*,
  externals: {
    endpoints: 'endpoints'
  }*/
};

module.exports = config;