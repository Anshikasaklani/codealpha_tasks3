// Get elements from the DOM
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const stopBtn = document.getElementById('stopBtn');
const songTitle = document.getElementById('songTitle');

// Initial song title
songTitle.textContent = 'Your Song';

// Play and Pause functionality
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

playPauseBtn.addEventListener('click', togglePlay);

// Stop functionality
stopBtn.addEventListener('click', function() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    playPauseBtn.textContent = 'Play';
    isPlaying = false;
});
