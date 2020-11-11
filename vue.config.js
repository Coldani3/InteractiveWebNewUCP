module.exports = {
    publicPath: "./",
    pages: {
        "index": {
            entry: "./src/index/main.js",
            template: "public/index.html",
            filename: "index.html"
        },
        "news": {
            entry: "./src/news/main.js",
            template: "public/news.html",
            filename: "news.html"
        }
    }
}