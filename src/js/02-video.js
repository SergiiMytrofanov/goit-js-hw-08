
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.querySelector("#vimeo-player")
const player = new Vimeo.Player(playerEl);

const updateCurrentTime = throttle(function(time) {
    localStorage.setItem('videoplayer-current-time', time);
  }, 1000);

  player.on('timeupdate', function(event) {
    const currentTime = event.seconds;
    updateCurrentTime(currentTime);
  });

  
  const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {

  player.setCurrentTime(savedTime).then(function() {
  
    player.play();
  }).catch(function(error) {
    console.error('Помилка при встановленні часу відтворення:', error.message);
  });
}

console.dir(savedTime)


// if (currentTime) {
//     player.setCurrentTime(parseFloat(currentTime)).catch(function(error) {
//       switch (error.name) {
//         case 'RangeError':
//           break;
//         default:
//          break;
//       }
//     });
//   }
  
//  const saveCurrentTime = throttle(function(data) {
//     const currentTime = data.seconds;
//     localStorage.setItem('videoplayer-current-time', currentTime);
//   }, 1000);
  
//    player.on('timeupdate', saveCurrentTime);