//If you change pages, you need to re run npm run serve as this file is not watched

module.exports = {
  publicPath: "./",
  pages: {
    index: {
      entry: "./src/index/main.js",
      template: "public/index.html",
      filename: "index.html"
    },
    news: {
      entry: "./src/news/main.js",
      template: "public/news.html",
      filename: "news.html"
    },
    apply: {
      entry: "./src/apply/main.js",
      template: "public/apply.html",
      filename: "apply.html"
    },
    contact: {
      entry: "./src/contact/main.js",
      template: "public/contact.html",
      filename: "contact.html"
    },
    covid: {
      entry: "./src/covid/main.js",
      template: "public/covid.html",
      filename: "covid.html"
    },
    help: {
      entry: "./src/help/main.js",
      template: "public/help.html",
      filename: "help.html"
    },
    search: {
      entry: "./src/search/main.js",
      template: "public/search.html",
      filename: "search.html"
    },
    login: {
      entry: "./src/login/main.js",
      template: "public/login.html",
      filename: "login.html"
    },
    ucas: {
      entry: "./src/ucas/main.js",
      template: "public/ucas.html",
      filename: "ucas.html"
    }
  }
};
