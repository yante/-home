const path = require("path");

module.exports = {
  webpack(config, options) {
    config.resolve.modules = ["node_modules", "./src"];
    return config;
  }
};
