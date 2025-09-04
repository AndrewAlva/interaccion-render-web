console.log("S05. Ejercicio 01: Geometries.");
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
//// Geometry.
const geo =  new THREE.TorusKnotGeometry(0.75,0.15,3000, 7);

// Mesh.
const mesh = new THREE.Mesh(
    geo,
    // new THREE.MeshBasicMaterial({ color: "#ff6600", wireframe: true })
    new THREE.MeshNormalMaterial({ wireframe: false, flatShading: true })
);


////////////////////////////////////////
// 3. Add object to the scene.
scene.add(mesh);


////////////////////////////////////////
// 4. Get renderer to render the scene.
renderer.render(scene, camera);


////////////////////////////////////////
// 5. Render loop to animate mesh.
// Animación
function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
