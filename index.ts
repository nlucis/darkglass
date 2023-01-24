// Import stylesheets
import './style.css';

// Write TypeScript code!
const appContainer: HTMLElement = document.getElementById('app');

document.addEventListener('DOMContentLoaded', () => {
  const appCanvas = document.createElement('canvas') as HTMLCanvasElement;
  appContainer.appendChild(appCanvas); 
  window.addEventListener('touchstart', () => {
    appContainer.requestFullscreen();
  });
});