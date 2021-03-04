module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    [
      'module-resolver',
      {
        "alias": {
          "@controllers": "./src/controllers",
          "@pages": "./src/pages",
          "@utils": "./src/utils",
        }
      } 
    ],
    ["@babel/plugin-transform-runtime"],
    ["add-module-exports"]
  ],
}
