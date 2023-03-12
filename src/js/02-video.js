import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(handleTimePlayer, 1000));

function handleTimePlayer(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

const currentTime = localStorage.getItem('videoplayer-current-time')
  ? localStorage.getItem('videoplayer-current-time')
  : 0;

player.setCurrentTime(currentTime);
