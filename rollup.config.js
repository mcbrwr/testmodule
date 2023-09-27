// Contents of the file /rollup.config.js
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
const config = [
  {
    output: {
      inlineDynamicImports: true,
      dir: "./dist",
    },
    input: "./src/index.ts",
    plugins: [
      typescript({
        typescript: require("typescript"),
      }),
      postcss({
        plugins: [],
        sourceMap: true,
        extract: true,
        minimize: true,
      }),
    ],
  },
];
export default config;
