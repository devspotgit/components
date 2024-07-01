


const path = require("path")


module.exports = {
    entry: {
      main: path.resolve(__dirname, '/lib.js')
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
      filename: 'components.js',
      path: path.resolve(__dirname, '/')
    }
}



