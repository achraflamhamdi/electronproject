const { app, BrowserWindow, Menu, ipcMain, remote, ipcRenderer } = require('electron');
const os = require('os-utils');
const path = require('path');
const db = require('./db');
const ad = require('./add');

//require('bootswatch/dist/solar/bootstrap.min.css');
// TODO: Note: Replace ^[theme]^ (examples: darkly, slate, cosmo, spacelab, and superhero. See https://bootswatch.com/ for current theme names.)


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  const { screen } = require('electron');
  const size = screen.getPrimaryDisplay().workAreaSize;
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: size.width,
    height: size.height,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity : false
    }
  });
  
  //window size manipuling part
  mainWindow.maximize();

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'page1.html'));

  // Open the DevTools. desactive pour le moment
  //mainWindow.webContents.openDevTools();

  //build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

  //insert menu
  Menu.setApplicationMenu(mainMenu);

  os.cpuUsage(function(v){
    mainWindow.webContents.send('cpu', v*100);
    mainWindow.webContents.send('mem', os.freememPercentage()*100);
    mainWindow.webContents.send('total-mem', os.totalmem()/1024);
  });
};

//server est indique ici
let server = require('./server/server.js')

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// catch event changing page
//ipcMain.on('form-submission', function(e, adherent){
  //ad.queryInsert(adherent);
//});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

//handle add window
function createAddWindow1(){
  /*addWindow = new BrowserWindow({});
  addWindow.loadURL(url.format({
    pathname: path.join(__dirname,)
  }))*/
}



//menu template
const mainMenuTemplate = [

  {
    label: 'Ajout',
    submenu:[
      {
        label: 'Ajouter Livre',
      },
      {
        label: 'Ajouter Adherent'
      },
    ]
  },
  {
    label: 'Options',
    submenu:[
      {
        label: 'Actualiser',
        role: 'reload'
      },
      {
        label: 'Quitter',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  }

];

//If MAC add empty object to menu
if(process.platform == 'darwin'){
  mainMenuTemplate.unshift({});
}

//Dev tools just during prod
if(process.env.NODE_ENV !== 'production'){
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu:[
      {
        label: 'Toggle Dev Tools',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        },
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
      }
    ]
  })
}


db.c;

//Search IPC 
ipcMain.on('Search-word', function(event, arg){
  console.log(arg)
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
