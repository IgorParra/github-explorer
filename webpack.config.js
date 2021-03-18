// English: Let's use 'path' to set our directories cause slash (/) may be used in different ways at different O.S, we are use 'require' cause webpack uses node;
// Portugês: Vamos usar o 'path' para definir nossos diretórios pois a barra (/) pode ser usada de diferentes maneiras nos diferentes S.O's, vamos usar o 'require' pois o webpack usa o node

const path = require("path");
const HtmlWepackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
	mode: isDevelopment ? "development" : "production",
	devtool: isDevelopment ? "eval-source-map" : "source-map",
	entry: path.resolve(__dirname, "src", "index.jsx"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	devServer: {
		contentBase: path.resolve(__dirname, "public"),
	},
	plugins: [
		new HtmlWepackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
		}),
	],
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
};
