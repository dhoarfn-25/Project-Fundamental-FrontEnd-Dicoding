const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

 
module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: ['style-loader', 'css-loader']
           },
           {
            test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[name].[ext]",
                  outputPath: 'fonts/'
    
                }
              }
            ]
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: "file-loader"
                }
            ]
        }
       ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           filename: path.resolve(__dirname, "dist/index.html"),
           template: path.resolve(__dirname, "src/index.html")
       }),
       new CopyWebpackPlugin({
            patterns: [
              {
                from: path.resolve(__dirname, "src/img"),
                to: path.resolve(__dirname, "dist/src/img")
              }
            ]
       })
   ]
};