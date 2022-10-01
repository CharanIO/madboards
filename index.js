const electron=require('electron');
const app=electron.app;
const browserwindow=electron.BrowserWindow;

let mainwindow;

function createwindow(){
    mainwindow=new browserwindow();
    mainwindow.loadFile('index.html');
}