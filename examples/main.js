import path from 'path';
import { app, ipcMain, BrowserWindow } from 'electron'; // eslint-disable-line import/no-unresolved

const ELECTRON_REACT_JSONSCHEMA_FORM_CHANGE = 'ELECTRON_REACT_JSONSCHEMA_FORM_CHANGE';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Add react devtools
  const reactDevToolsPath = path.resolve(
    process.env.LOCALAPPDATA,
    'Google',
    'Chrome',
    'User Data',
    'Default',
    'Extensions',
    'fmkadmapgofadopljbjfkapdkoienihi',
    '0.14.11_0',
  );
  BrowserWindow.addDevToolsExtension(reactDevToolsPath);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  ipcMain.on(ELECTRON_REACT_JSONSCHEMA_FORM_CHANGE, (evt, data) => {
    // Process your data here...
    console.log(data);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
