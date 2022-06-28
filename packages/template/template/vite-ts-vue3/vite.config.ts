import { defineConfig, loadEnv, ConfigEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import autoImport from "unplugin-auto-import/vite";
import viteHtmlPlugin from "./src/utils/viteHtmlPlugin/index";

function getEnvVariable(mode: string) {
  return loadEnv(mode, process.cwd());
}

export default ({ mode }: ConfigEnv) => {
  return defineConfig({
    root: process.cwd(), // index.html所在文件
    base: "/", // 基础路径
    define: {
      appName: JSON.stringify("my-custom-name"),
    }, // 全局变量
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    plugins: [
      vue(),
      autoImport({
        imports: ["vue", "vue-router", "@vueuse/core"],
        eslintrc: {
          enabled: true, // Default `false`
        },
      }),
      viteHtmlPlugin({
        metaEnv: getEnvVariable(mode),
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "${resolve(
            __dirname,
            "./src/style/variable.less"
          )}";`,
        },
      },
    },
    server: {
      port: 2525,
      proxy: {}, // cross
    },
  })
}
