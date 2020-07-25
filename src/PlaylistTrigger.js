const albumTracks = document.getElementById('album-tracks')
let audioObject = null

export default function playlistTrigger() {
  albumTracks.addEventListener('click', function (e) {
    const target = e.target.parentNode

    if (target.classList.contains('active')) {
      audioObject.pause()
    } else {
      if (audioObject) {
        audioObject.pause()
      }

      audioObject = new Audio(target.getAttribute('data-track-preview'))
      audioObject.play()
      target.classList.add('active')

      audioObject.addEventListener('pause', function () {
        target.classList.remove('active')
      })
    }
  })
}
