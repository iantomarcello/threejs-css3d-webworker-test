const canvas = document.getElementById('canvas');
const offscreen = canvas.transferControlToOffscreen();
const worker = new Worker( 'worker.js', { type: 'module' } );
worker.postMessage( {
	drawingSurface: offscreen,
	width: canvas.clientWidth,
	height: canvas.clientHeight,
	pixelRatio: window.devicePixelRatio,
	path: '../../'
}, [ offscreen ] );
