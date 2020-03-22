const webview = document.createElement('webview')
webview.style.width = '768px'
webview.style.height = '894px'

document.body.append(webview)
webview.src = 'https://m.youtube.com/watch?v=g0U95UErodo'

webview.addEventListener('dom-ready', () => {
  setTimeout(() => {
    webview.style.width = '640px'
    webview.style.height = '480px'
    console.log('resized 640px')    
    setTimeout(() => {
      webview.style.width = '1280px'
      webview.style.height = '720px'    
      console.log('resized 1280px')          
    }, 5000)
  }, 1000)
  console.log(webview)
  webview.executeJavaScript(`
  document.addEventListener("webkitfullscreenchange", function(event) {
    console.log('check', event)
    const ytdEle = document.getElementsByTagName('ytd-app')[0]


    console.log(document.webkitFullscreenElement)
    if (document.webkitFullscreenElement) { //full screen
      setTimeout(() => {
        // webview.style.width = '1024px'
        // webview.style.height = '720px'
        const d = document.getElementById('player-theater-container')
        const videoRect = d.getClientRects()[0]
        const sx = videoRect.x
        const ex = videoRect.x + videoRect.width
        const sy = videoRect.y
        const ey = videoRect.y + videoRect.height

        // const clipStyle = 'polygon(' + sx + 'px ' + sy + 'px, ' + ex + 'px ' + sy + 'px, ' + ex + 'px ' + ey + 'px, ' + sx + 'px ' + ey + 'px)'
        // ytdEle.style.clipPath = clipStyle
      }, 100)
    } else {
      setTimeout(() => {
        // ytdEle.style.clipPath = ''
      }, 100)
    }
    // event.stopPropagation()
  }, true);
  `)
  // document.addEventListener('fullscre enchange', (event) => {
  //   console.log(event)
  // })
  // const player = webview.webContents.document.getElmentById('#player')
  // webview.webContents.body.style = ''
  webview.openDevTools()
})


