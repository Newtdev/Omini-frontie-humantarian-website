// const purgecss = require("@fullhuman/postcss-purgecss")({
// 	content: ["./public/**/*.html"],
// 	defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
// });

export const plugins = [require("tailwindcss"), require("autoprefixer")];
