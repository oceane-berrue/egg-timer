import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const indexHtml = path.resolve(__dirname, "../dist/index.html");
console.log("Index HTML path:", indexHtml)

let win

function createWindow() {
  win = new BrowserWindow({
    width: 318,
    height: 406,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    // remove default titlebar
    titleBarStyle: 'hidden',
    // expose window controls in Winodws/Linux
    ...(process.platform !== 'darwin' ? {titleBarOverlay: false} : {}),
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
      
    }
  })

  win.loadFile(indexHtml)

}

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on("close-app", () => {
  app.quit()
})

ipcMain.on("minimize-app", () => {
  win?.minimize()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})