const { app, BrowserWindow, Menu, session, globalShortcut, crashReporter } = require("electron");

const path = require("path");

const { rendererURL } = require("./url");

let mainWindow = null;

const TITLE = "project-name";

// 崩溃报告
crashReporter.start({
  uploadToServer: false,
  compress: false,
});

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1400,
    minHeight: 900,
    show: true,
    title: TITLE,
    // icon: path.join(__dirname, "logo.ico"),
    webPreferences: {
      // 预加载
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // 加载渲染进程
  mainWindow.loadURL(rendererURL);

  // // 禁用系统菜单栏
  // const template = [];
  // const menu = Menu.buildFromTemplate(template);
  // Menu.setApplicationMenu(menu);
}

// 启动后端服务
function launchBackendServer() {}

// 停止后端服务
function stopServer() {}

function registerShortcut() {
  // Alt+F12 打开控制台
  globalShortcut.register("Alt+F12", () => {
    let focused = BrowserWindow.getFocusedWindow();
    focused && focused.webContents.openDevTools();
  });

  // Ctrl+R 刷新
  globalShortcut.register("Ctrl+R", () => {
    let focused = BrowserWindow.getFocusedWindow();
    focused && focused.webContents.reload();
  });
}

// 单一实例锁，防止启动两个应用
const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  // Electron 已经完成初始化，并准备好创建窗口。部分 API 只有在 whenReady 之后才可以使用。
  app.whenReady().then(async () => {
    // 启动后端服务
    launchBackendServer();

    // 创建窗口
    createWindow();

    // 开发环境下，加载 vue-devtools 扩展(https://github.com/vuejs/devtools/tree/main/packages/shell-chrome)
    if (process.env.NODE_ENV === "development") {
      try {
        await session.defaultSession.loadExtension(path.join(__dirname, "../../shell-chrome"), {
          allowFileAccess: true,
        });
      } catch (error) {}
    }

    // 开发环境下，注册快捷键
    if (process.env.NODE_ENV === "development") registerShortcut();

    // 第二实例启动
    app.on("second-instance", (event, argv) => {});

    app.on("activate", function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });

  app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
      app.quit();
    }

    stopServer();
  });

  app.on("before-quit", () => {});
}
