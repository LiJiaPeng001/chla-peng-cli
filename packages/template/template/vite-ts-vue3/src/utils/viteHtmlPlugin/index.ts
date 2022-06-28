import type { PluginOption } from "vite";

interface EnvOptions {
  metaEnv?: any;
}

export default function (options: EnvOptions): PluginOption {
  return {
    name: "vite:html",
    transformIndexHtml(html) {
      let { metaEnv = {} } = options;
      let envKeys = html.match(/(?<=<%= )\w*(?= %>)/gim);
      envKeys?.forEach((key) => {
        let reg = new RegExp(`<%= ${key} %>`, "gmi");
        html = html.replace(reg, metaEnv[key]);
      });
      return html;
    },
  };
}
