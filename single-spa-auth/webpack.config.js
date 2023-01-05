const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-spa",
    projectName: "auth",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["@react-spa/store"],
    // modify the webpack config however you'd like to by adding to this object
  });
};
