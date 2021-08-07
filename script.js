var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop=true;
audio.play()
// var playPromise = audio.play();
// if (playPromise !== undefined) {
//     playPromise.then(_ => {
//      audio.pause()
//     })
//     .catch(error => {
//       // Auto-play was prevented
//       // Show paused UI.
//     });
//   }
