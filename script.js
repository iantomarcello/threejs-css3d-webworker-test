/**
 *  WebGL
 */

const webGLCanvas = document.getElementById('webGL');
const css3DCanvas = document.getElementById('css3D');
const offscreen = webGLCanvas.transferControlToOffscreen();
const worker = new Worker( 'worker.js', { type: 'module' } );
const ab = new ArrayBuffer(8);
worker.postMessage( {
	drawingSurface: offscreen,
	width: webGLCanvas.clientWidth,
	height: webGLCanvas.clientHeight,
	pixelRatio: window.devicePixelRatio,
  ab,
}, [ offscreen ] );

/**
 *  CSS3D

import { Scene, PerspectiveCamera } from 'three';
import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

const scene = new Scene();
const camera = new PerspectiveCamera(45, webGLCanvas.clientWidth / webGLCanvas.clientHeight, 0.1, 1000);

let div = document.createElement("div");
div.style.width = CSS.px(150);
div.style.height = CSS.px(150);
div.style.opacity = 0.75;
div.style.backgroundColor = "rgb(138, 179, 112)";

let cssObject = new CSS3DObject(div);
cssObject.position.z = -300;
scene.add(cssObject);

const css3DCanvas = document.getElementById('css3D');
let cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(webGLCanvas.clientWidth, webGLCanvas.clientHeight);
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = 0;
css3DCanvas.appendChild(cssRenderer.domElement);

cssRenderer.render(scene, camera);
*/
