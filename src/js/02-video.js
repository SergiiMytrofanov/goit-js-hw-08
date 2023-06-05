
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.querySelector("#vimeo-player");
const player = new Vimeo(playerEl);

let watchedTime = 0;

const watchedTimeReload = throttle(function (event) {
  watchedTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(watchedTime));
}, 1000);

player.on('timeupdate', watchedTimeReload);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  const parsedTime = JSON.parse(savedTime);
  watchedTime = parsedTime;
}

player.setCurrentTime(watchedTime)
  .then(function (seconds) {
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
       break;
      default:
      break;
    }
  });