import { Scene, PerspectiveCamera, WebGLRenderer, GridHelper, Mesh, BoxGeometry, MeshBasicMaterial } from 'three';

let width = 0;
let height = 0;
let pixelRatio = 0;

let scene = new Scene();
let camera;
let renderer;

let gridHelper;
let box;

self.addEventListener("message", ev => {
  let data = ev.data;
  camera = new PerspectiveCamera(45, data.width / data.height, 0.1, 1000);
  camera.position.y = 30;

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

  animate();
});


const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  box.rotation.y += 0.01;
  box.rotation.x += 0.001;
}
