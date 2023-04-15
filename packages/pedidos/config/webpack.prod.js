const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const commonConfig = require("./webpack.common");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/pedidos/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "pedidos",
      filename: "remoteEntry.js",
      exposes: {
        "./PedidosApp": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
