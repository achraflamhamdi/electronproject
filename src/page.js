const { app, BrowserWindow, remote } = require('electron');
const os = require('os-utils');
const path = require('path');
const f = remote.require('index');
let win = remote.getCurrentWindow();

const win = new BrowserWindow(options);

let mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_biblio"
});

con.connect(function(err) {
  if (err) throw err;
  
  win.console.log("Connected!");
});