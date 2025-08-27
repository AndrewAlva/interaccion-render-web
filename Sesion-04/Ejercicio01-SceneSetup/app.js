console.log("S04. Ejercicio 01: Scene Setup");
console.log(THREE);

////////////////////
// 1. Canvas setup.
const canvas = document.getElementById("lienzo");
var width = window.innerWidth;
var height = window.innerHeight;


////////////////////
// 2. 3D Scene setup.
// Renderer.
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(width, height);

// Scene.
const scene = new THREE.Scene();

// Camera. (And its position).
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 2;

// Object or Mesh.
const mesh = new THREE.Mesh(
    new THREE.SphereGeometry(),
    new THREE.MeshBasicMaterial({ color: "#ff6600", wireframe: true })
    // new THREE.MeshNormalMaterial({ wireframe: true })
);


////////////////////////////////////////
// 3. Add object to the scene.
scene.add(mesh);


////////////////////////////////////////
// 4. Get renderer to render the scene.
renderer.render(scene, camera);