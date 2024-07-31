/*
 * @Author: rk
 * @Description:
 * @Date: 2024-07-11 09:12:53
 * @LastEditors: rk
 * @LastEditTime: 2024-07-11 09:17:43
 */
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./lib/main.js",
      name: "Fastcode",
      fileName: "fastcode",
    },
  },
});
