document.addEventListener('DOMContentLoaded', () => {
   const video = document.getElementById('video');
   const playPauseButton = document.getElementById('playPause');
   const rewindButton = document.getElementById('rewind');
   const forwardButton = document.getElementById('forward');

   playPauseButton.addEventListener('click', () => {
       if (video.paused) {
           video.play();
           playPauseButton.textContent = 'Pause';
       } else {
           video.pause();
           playPauseButton.textContent = 'Play';
       }
   });

   rewindButton.addEventListener('click', () => {
       video.currentTime -= 5;
   });

   forwardButton.addEventListener('click', () => {
       video.currentTime += 5;
   });
});
