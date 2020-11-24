function getImageURL(imageName) {
  var assets = require.context("./assets/");

  return assets("./" + imageName);
}

export { getImageURL };
