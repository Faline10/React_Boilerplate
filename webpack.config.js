module.exports = {
    entry: "./App.jsx",
    output: {
        path: __dirname,
        filename: "public/bundle.js"
    },
    module: {
        preLoaders: [
          {
            test: /\.jsx?$/,
            loader: "eslint",
            exclude: /node_modules/
          }
        ],
        loaders: [
          {
            test: /\.jsx?$/,
            loader: 'babel-loader'
          }
        ]
    }
};
