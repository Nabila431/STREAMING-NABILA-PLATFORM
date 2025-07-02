// js/app.js
const playlist = [
  {
    title: "Janda Nakal",
    artist: "Nabila Ahmad",
    playbackId: "1QLzDAFFm01uW02VxAf2yZ004SlFtcOLTw3L7s5woOrl5Q"
  },
  {
    title: "Drunk Confessions",
    artist: "Nabila Ahmad",
    playbackId: "d802AEWpBCRJ9dPJVhQFinHhkH01hRb027NssU1FykBgYg"
  },
  {
    title: "Broken Home Anthem",
    artist: "Nabila Ahmad",
    playbackId: "kqp9FRoagl00tTEk5ZSdlIYAfpBWgbjvGLmf2sFl9bGY"
  },
  {
    title: "Pelukan Senja",
    artist: "Nabila Ahmad",
    playbackId: "y02TWzsfRTj717WZty00AY028A97xe01l501aAAJjiXAjL7A"
  }
];

const videoContainer = document.getElementById("video-container");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const playlistDiv = document.getElementById("playlist");

function renderPlaylist() {
  playlist.forEach((song, index) => {
    const btn = document.createElement("button");
    btn.innerText = `${song.title} - ${song.artist}`;
    btn.onclick = () => playSong(index);
    playlistDiv.appendChild(btn);
  });
}

function playSong(index) {
  const song = playlist[index];
  videoContainer.innerHTML = `
    <iframe
      src="https://stream.mux.com/${song.playbackId}.m3u8"
      type="application/x-mpegURL"
      width="100%"
      height="360"
      controls
      allowfullscreen
    ></iframe>
  `;
  trackTitle.innerText = song.title;
  trackArtist.innerText = song.artist;
}

// Event tombol (sementara dummy)
document.getElementById("like-btn").onclick = () => alert("Kamu menyukai lagu ini!");
document.getElementById("share-btn").onclick = () => alert("Link dibagikan!");

renderPlaylist();
playSong(0); // Auto-play lagu pertama
