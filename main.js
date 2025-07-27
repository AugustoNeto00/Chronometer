const { app, BrowserWindow } = require("electron")
//aqui estou criando a janela com o BrowserWindow e "settando" a largura e a altura desta janela
const createWindow = () => {
const win = new BrowserWindow({
    width: 800,
    height: 1500
})
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
    //quando nao ouver nenhuma janela rodando o app fecha
    app.on('activate', () =>{
        if (process.platform !== 'darwin'){
            app.quit()
        }
    })
    //essa daqui serve para macOS quando a pagina estiver minimizada ele cria outra e nao se encerra
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})