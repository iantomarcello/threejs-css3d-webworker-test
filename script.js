import { Scene, PerspectiveCamera, WebGLRenderer, GridHelper, Mesh, BoxGeometry, MeshBasicMaterial } from 'three';

const width = window.innerWidth;
const height = window.innerHeight;
const pixelRatio = window.devicePixelRatio;

const scene = new Scene();

const camera = new PerspectiveCamera(45, width / height, 0.1, 1000);
camera.position.y = 30;

const renderer = new WebGLRenderer({antialias: true});
renderer.setSize(width, height);
renderer.setPixelRatio(pixelRatio);
document.body.appendChild(renderer.domElement);

const gridHelper = new GridHelper(1000, 100);
scene.add(gridHelper);

const box = new Mesh(
  new BoxGeometry(60, 60, 60),
  new MeshBasicMaterial({ color: 0xf5f5f5 })
);
box.position.z = -300;
box.position.y = 30;
scene.add(box);

const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  box.rotation.y += 0.01;
  box.rotation.x += 0.001;
}
animate();
