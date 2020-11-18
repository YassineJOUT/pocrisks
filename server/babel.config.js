module.exports = {
  plugins: ["@babel/plugin-proposal-class-properties",
    [
      "module-resolver",
      {
        alias: {
          "#root": "./src",
        },
      },
    ],
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
};
