const webview = document.createElement('webview')
webview.style.width = '768px'
webview.style.height = '894px'

document.body.append(webview)
webview.src = 'https://m.youtube.com/watch?v=g0U95UErodo'

webview.addEventListener('dom-ready', () => {
  console.log(webview)
  webview.executeJavaScript(`
  document.addEventListener("webkitfullscreenchange", function(event) {
    console.log('check', event)
    const ytdEle = document.getElementsByTagName('ytd-app')[0]


    console.log(document.webkitFullscreenElement)
    if (document.webkitFullscreenElement) { //full screen
      setTimeout(() => {
        const d = document.getElementById('player-theater-container')
        const videoRect = d.getClientRects()[0]
        const sx = videoRect.x
        const ex = videoRect.x + videoRect.width
        const sy = videoRect.y
        const ey = videoRect.y + videoRect.height

        const clipStyle = 'polygon(' + sx + 'px ' + sy + 'px, ' + ex + 'px ' + sy + 'px, ' + ex + 'px ' + ey + 'px, ' + sx + 'px ' + ey + 'px)'
        ytdEle.style.clipPath = clipStyle
      }, 100)
    } else {
      console.log('chekc')
      setTimeout(() => {
        ytdEle.style.clipPath = ''
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


