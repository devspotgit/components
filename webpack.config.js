


const path = require("path")


module.exports = {
    entry: {
        main: path.resolve(__dirname, 'static/lib/static.js')
    },
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        { 
            test: /\.css$/, 
            use: ["style-loader", "css-loader"] 
        },
      ],
    },
    output: {
      filename: 'static.js',
      path: path.resolve(__dirname, 'static/build/')
    }
}



