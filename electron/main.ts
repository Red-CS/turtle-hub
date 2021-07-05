import { app, BrowserWindow, ipcMain } from "electron";
import { START_SERVER } from "../util/constants";
import * as path from "path";
import * as isDev from "electron-is-dev";
import Websocket = require("ws");
// import installExtension, {
//   REACT_DEVELOPER_TOOLS,
// } from "electron-devtools-installer";

let win: BrowserWindow | null = null;
let wss: Websocket.Server | null = null;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isDev) {
    win.loadURL("http://localhost:3000/index.html");
  } else {
    // 'build/index.html'
    win.loadURL(`file://${__dirname}/../index.html`);
  }

  win.on("closed", () => (win = null));

  // Hot Reloading
  if (isDev) {
    // 'node_modules/.bin/electronPath'
    require("electron-reload")(__dirname, {
      electron: path.join(
        __dirname,
        "..",
        "..",
        "node_modules",
        ".bin",
        "electron"
      ),
      forceHardReset: true,
      hardResetMethod: "exit",
    });
  }

  // // DevTools
  // installExtension(REACT_DEVELOPER_TOOLS)
  //   .then((name) => console.log(`Added Extension:  ${name}`))
  //   .catch((err) => console.log("An error occurred: ", err));

  // if (isDev) {
  //   win.webContents.openDevTools();
  // }
}

function createWebsocketServer() {
  console.log("Creating server");
  wss = new Websocket.Server({ port: 8080 });

  wss.on("connection", function connection(ws) {
    ws.on("message", function incoming(message) {
      console.log("received: %s", message);
      if (wss) {
        wss.clients.forEach((client) => {
          client.send(JSON.stringify({ function: "return turtle.forward()" }));
        });
      }
    });
  });
}

function deleteWebsocketServer() {
  console.log("Deleting Server");
  if (wss) wss.close();
  wss = null;
}

ipcMain.on(START_SERVER, (event, arg) => {
  console.log("Toggling Server");
  if (wss) {
    deleteWebsocketServer();
    event.reply("server-status", false);
  } else {
    createWebsocketServer();
    event.reply("server-status", true);
  }
});

app.on("ready", () => {
  createWindow();
  // createWebsocketServer();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
