const YouTubePlayer = require('youtube-player')

export default target => {
  const classes = target.getElementsByClassName('youtube')

  if (classes[0]) {
    let player
    const url = `${location.protocol}//${location.hostname}`

    Array.prototype.slice.call(classes).forEach(edge => {
      edge.getElementsByClassName('youtube__button')[0].addEventListener('click', () => {
        player = YouTubePlayer(edge.dataset.youtube, {
          height: '720',
          width: '1280',
          videoId: edge.dataset.youtube,
          playerVars: {
            rel: 0,
            autoplay: 1,
            enablejsapi: 1,
            playsinline: 1,
            modestbranding: 1,
            showinfo: 0,
            origin: url,
            widget_referrer: url
          }
        })

        player.on('ready', () => {
          player.mute()
          player.playVideo()
        })
      })
    })
  }
}
