const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        titleBarStyle: 'hidden',
        trafficLightPosition: { x: 16, y: 10 },
        icon: './images/512x512@2x.png',
        title: 'ytv',
        autoHideMenuBar: true,
        backgroundColor: '#000000',
    })

    win.setAspectRatio(16 / 9)
    win.webContents.setUserAgent('Mozilla/5.0 (SMART-TV; Linux; Tizen 5.0) AppleWebKit/538.1 (KHTML, like Gecko) Version/5.0 NativeTVAds Safari/538.1')
    win.webContents.insertCSS(`
        body::before {
            width: 100vw;
            height: 36px;
            position: fixed;
            top: 0;
            left: 0;
            content: '';
            z-index: 999999;
            -webkit-app-region: drag;
        }
    `)
    win.loadURL('https://youtube.com/tv')
    win.webContents.on('did-finish-load', () => {
        win.setTitle('ytv')
    })
    win.webContents.on('did-fail-load', () => {
        win.loadFile('offline.html')
    })
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
