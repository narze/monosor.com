const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");
const fullConfig = resolveConfig(tailwindConfig);

module.exports = () => ({
  plugins: [
    require(`tailwindcss`)(fullConfig),
    require(`autoprefixer`),
    ...(process.env.NODE_ENV === `production`
      ? [require(`cssnano`)]
      : []),
  ],
})
