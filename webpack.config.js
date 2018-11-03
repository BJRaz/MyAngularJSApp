const path = require("path");

module.exports = {
    mode: "development",
    entry: "./app/app.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
}
