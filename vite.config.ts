import {resolve} from "path";

import {splitVendorChunkPlugin, UserConfig} from "vite";
import Checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";

const shouldAnalyze = process.env.ANALYZE;

const config: UserConfig = {
  resolve: {
    alias: {
      src: resolve(__dirname, "./src"),
    },
  },
  publicDir: './public',
  build: {
    assetsDir: "static-interview",
    rollupOptions: {},
    sourcemap: !!shouldAnalyze,
  },
  esbuild: {
    jsxFactory: `jsx`,
    // jsxInject: `import { jsx } from '@emotion/react'`,
  },
  plugins: [
    svgr(),
    // react(),
    splitVendorChunkPlugin(),
    Checker({
      typescript: true,
      overlay: true,
    }),
  ],
  // server: {
  //   host: "127.0.0.1",
  //   port: 3001,
  //   // https://vitejs.dev/config/#server-proxy
  //   proxy: {
  //     "^/api/.*": {
  //       target: "http://127.0.0.1:8000",
  //       changeOrigin: true,
  //       ws: true,
  //       secure: false,
  //     },
  //   },
  // },
};

export default config;
