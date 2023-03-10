import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function handleTimePlayer(event) {
  // console.log('played the video!');
  // console.log(e.seconds);
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

player.on('timeupdate', throttle(handleTimePlayer, 1000));
player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));

// .then(function (seconds) {
//   seconds = localStorage.getItem('videoplayer-current-time');
// })
// .catch(function (error) {
//   switch (error.name) {
//     case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//       break;

//     default:
//           // some other error occurred
//       break;
//   }
// });
