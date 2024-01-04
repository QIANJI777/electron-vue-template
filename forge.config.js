module.exports = {
  packagerConfig: {
    asar: true,
    name: "project-name",
    // appVersion: "5.2.6.14",
    // buildVersion: "5.2.6.14",
    icon: "src/main/logo.ico",
    appCopyright: "",
    ignore: [
      "/.vscode",
      "/.gitignore",
      "/node_modules",
      "/public",
      "/shell-chrome",
      "/src/renderer",
      "/babel.config.js",
      "/vue.config.js",
      "/README.md",
      "/docs",
      "/tests",
    ],
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
  ],
};
