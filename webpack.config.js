import path from 'node:path'
import { fileURLToPath } from 'url'

/*Plugins*/
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  entry: './src/assets/js/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true, // Enables gzip compression
    port: 3000, // Common port
    hot: true, // Hot Module Replacement (updates CSS/JS without refresh)
    liveReload: true, // Reloads the page if HMR fails
    open: true, // Automatically opens your browser
    historyApiFallback: true, // Redirects 404s to index.html (great for routing)
    client: {
      overlay: true, // Shows compiler errors directly in the browser window
    },
    watchFiles: ['src/**/*'], // Forces a reload for HTML/Asset changes
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Uses your HTML as a base
      title: 'My project',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, // Extracts to a file
          'css-loader', // Resolves imports
        ],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif|ttf|woff|woff2)$/i,
        type: 'asset/resource',
        generator: {
          // This mirrors the 'name' option in file-loader
          filename: 'assets/[hash][ext][query]',
        },
      },
    ],
  },
  // 2026 Modern Feature: Native CSS support (Optional/Experimental)
  experiments: {
    css: false,
  },
  performance: {
    hints: false, // Desactiva las advertencias por completo
    maxEntrypointSize: 512000, // Sube el límite a 500kb
    maxAssetSize: 512000,
  },
}
