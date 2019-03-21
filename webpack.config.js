const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/app/app.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts','.tsx','.js']
    }, 
    devtool: 'source-map',
    module: {
        rules: [
          {
            test: /\.tsx?$/, 
            loader: "ts-loader",
            exclude: /node_modules/
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
              test: /\.html$/,
              use: ['html-loader']
          }
        ]
      }
    
}
