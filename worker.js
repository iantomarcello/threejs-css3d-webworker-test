import { Scene, PerspectiveCamera, WebGLRenderer, GridHelper, Mesh, BoxGeometry, MeshBasicMaterial } from 'three';
import { CSS3DObject, CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer.js';
// import * as JSDOM from 'jsdom';

let width = 0;
let height = 0;
let pixelRatio = 0;

let scene = new Scene();
let camera;
let renderer;
let cssRenderer;

let gridHelper;
let box;

self.addEventListener("message", ev => {
  let data = ev.data;
  camera = new PerspectiveCamera(45, data.width / data.height, 0.1, 1000);
  camera.position.y = 30;

  /**
   *  WebGl
   */

  renderer = new WebGLRenderer({ antialias: true, canvas: data.drawingSurface });
  renderer.setSize(data.width, data.height, false);
  renderer.setPixelRatio(data.pixelRatio);

  gridHelper = new GridHelper(1000, 100);
  scene.add(gridHelper);

  box = new Mesh(
    new BoxGeometry(60, 60, 60),
    new MeshBasicMaterial({ color: 0xf5f5f5 })
  );
  box.position.z = -300;
  box.position.y = 30;
  scene.add(box);

  /**
   *  CSS3D
   */

  // let div = document.createElement("div");
  // div.style.width = CSS.px(150);
  // div.style.height = CSS.px(150);
  // div.style.opacity = 0.75;
  // div.style.backgroundColor = "rgb(138, 179, 112)";
  //
  // let cssObject = new CSS3DObject(div);
  // cssObject.position.z = -300;
  // scene.add(cssObject);

  // console.log(data.css3DContainer);

  // cssRenderer = new CSS3DRenderer(data.css3DContainer);
  // cssRenderer.setSize(data.width, data.height, false);
  // cssRenderer.domElement.style.position = 'absolute';
  // cssRenderer.domElement.style.top = 0;
  // data.css3DContainer.appendChild(data.domElement);

  console.log(data.ab);

  animate();
});


const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // cssRenderer.render(scene, camera);
  box.rotation.y += 0.01;
  box.rotation.x += 0.001;
}
