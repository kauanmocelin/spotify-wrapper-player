import spotify from './Spotify'
import renderAlbumInfo from './AlbumInfo'
import renderAlbumTracks from './AlbumTracks'

const listAlbums = document.getElementById('album-list')
const albumInfoEl = document.getElementById('album-info')
const albumTracksEl = document.getElementById('album-tracks')

function makeRequest(albumId) {
  spotify.album
    .getAlbum(albumId)
    .then(data => renderAlbumInfo(data, albumInfoEl))
    .then(data => renderAlbumTracks(data.tracks.items, albumTracksEl))
}

export default function selectAlbumTrigger() {
  listAlbums.addEventListener('click', e => {
    const target = e.target
    makeRequest(target.getAttribute('data-album-id'))
  })
}
