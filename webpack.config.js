var path = require("path");

var DIST_DIR = path.resolve(__dirname, "src");
var SRC_DIR = path.resolve(__dirname, "public");

var config = {
    entry: SRC_DIR + "/portfolio/index.js",
    output: {
        path: DIST_DIR + "/portfolio",
        filename: "bundle.js",
        publicPath: "/portfolio/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;