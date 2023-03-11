import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function handleTimePlayer(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

player.on('timeupdate', throttle(handleTimePlayer, 1000));
player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
