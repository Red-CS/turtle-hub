// // Preload (Isolated World)
// import { contextBridge, ipcRenderer } from "electron";
// import { START_SERVER } from "../util/constants";

// contextBridge.exposeInMainWorld("electron", {
//   toggleServer: () => ipcRenderer.send(START_SERVER, "sdfsdf"),
//   getStatus: () =>
//     ipcRenderer.on("server-status", (event, arg) => {
//       return event;
//     }),
// });
