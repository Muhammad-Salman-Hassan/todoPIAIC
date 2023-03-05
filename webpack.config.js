const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  
  entry: './src/index.js',
  
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Load all .js and .jsx files
        exclude: /node_modules/, // Exclude the node_modules folder
        use: {
          loader: 'babel-loader', // Use the babel-loader to transpile the code
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'] // Use the @babel/preset-env and @babel/preset-react presets for transpiling
          }
        }
      }
    ]
  },
  
  plugins: [    new HtmlWebPackPlugin({
      template: './public/index.html', 
      filename: './index.html' 
    })
  ],

  
  devServer: {
    static: {
      directory: __dirname + '/dist' 
    }
  }
};
