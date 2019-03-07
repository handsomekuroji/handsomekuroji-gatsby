const YouTubePlayer = require('youtube-player')

export default scriptTarget => {
  const ytClass = scriptTarget.getElementsByClassName('youtube')
  if (ytClass[0]) {
    let ytPlayer
    const domainUrl = location.protocol + '//' + location.hostname
    Array.prototype.slice.call(ytClass).forEach(ytBox => {
      ytBox.getElementsByClassName('youtube__button')[0].addEventListener('click', () => {
        ytPlayer = YouTubePlayer(ytBox.dataset.youtube, {
          height: '720',
          width: '1280',
          videoId: ytBox.dataset.youtube,
          playerVars: {
            rel: 0,
            autoplay: 1,
            enablejsapi: 1,
            playsinline: 1,
            modestbranding: 1,
            showinfo: 0,
            origin: domainUrl,
            widget_referrer: domainUrl
          }
        })
        ytPlayer.on('ready', () => {
          ytPlayer.mute()
          ytPlayer.playVideo()
        })
      })
    })
  }
}
