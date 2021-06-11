const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// let pathsToClean = [
//     path.resolve(__dirname, "dist"),  // same as output path
// ]

// let cleanOptions = {
//     root: __dirname,
//     exclude:  [],  // add files you wanna exclude here
//     verbose:  true,
//     dry:      false
// }


module.exports = {
    entry: { index: "./src/index.js" },

    output: {
        path: path.resolve(__dirname, "dist"),
        // publicPath: "/",
        filename: "[name].[contenthash].bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000,
        watchContentBase: true,
        historyApiFallback: { index: "index.html" },
    },
    plugins: [
        // new CleanWebpackPlugin({pathsToClean, cleanOptions}),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),

        new CopyPlugin([{ from: "src/assets/image", to: "image" }]),
        // new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        outputPath: "./image",
                        name: "[name].[ext]",
                    },
                },
            },
            {
                test: /\.(html)$/,
                // include: path.resolve(__dirname, 'src'),
                use: ["html-loader"],
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/transform-runtime"],
                    },
                },
            },
        ],
    },
};
