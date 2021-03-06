import { app, BrowserWindow, ipcMain } from "electron";
import { TOGGLE_SERVER, SERVER_STATUS } from "../src/util/constants";
import * as path from "path";
import * as isDev from "electron-is-dev";
import Websocket = require("ws");
// import installExtension, {
//   REACT_DEVELOPER_TOOLS,
// } from "electron-devtools-installer";

let win: BrowserWindow | null = null;
let wss: Websocket.Server | null = null;

// // DevTools
// installExtension(REACT_DEVELOPER_TOOLS)
//   .then((name) => console.log(`Added Extension:  ${name}`))
//   .catch((err) => console.log("An error occurred: ", err));

// if (isDev) {
//   win.webContents.openDevTools();
// }

/* --------------------------- App Main Processes --------------------------- */

app.on("ready", () => {
  createWindow();
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

/* ---------------------------- Helper Functions ---------------------------- */

/**
 * Creates the main Window, and allows hot reloading for development
 */
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false
    }
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
      hardResetMethod: "exit"
    });
  }
}

/**
 * Creates the Websocket Server
 */
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

  console.log("Server created");
}

/**
 * Deletes the Websocket Server
 */
function deleteWebsocketServer() {
  console.log("Deleting Server");
  if (wss) wss.close();
  wss = null;
  console.log("Server removed");
}

/* ------------------------ Ipc Main/Renderer Process ----------------------- */

// Handles the Toggle Server event called from renderer
ipcMain.on(TOGGLE_SERVER, (event, arg) => {
  if (wss) {
    deleteWebsocketServer();
    event.reply(SERVER_STATUS, false);
  } else {
    createWebsocketServer();
    event.reply(SERVER_STATUS, true);
  }
});
