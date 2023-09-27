// Contents of the file /rollup.config.js
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";
const config = [
  {
    input: "src/index.ts",
    output: {
      inlineDynamicImports: true,
      dir: "./dist",
      format: "es",
    },
    external: [...Object.keys(pkg.dependencies || {}), "react/jsx-runtime"],
    plugins: [
      typescript({
        typescript: require("typescript"),
      }),
      postcss({
        plugins: [],
        modules: true,
        sourceMap: true,
        extract: false,
        minimize: true,
      }),
    ],
  },
];
export default config;
