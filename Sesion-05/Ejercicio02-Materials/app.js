console.log("S05. Ejercicio 02: Materials.");
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

// Material.
// const material = new THREE.MeshBasicMaterial({ color: "#ff6600" });
// const material = new THREE.MeshNormalMaterial();
// const material = new THREE.MeshLambertMaterial({ color: "#ffffff" });
// const material = new THREE.MeshPhongMaterial({ color: "#ffffff" });
// const material = new THREE.MeshStandardMaterial({ color: "#ffffff" });
const material = new THREE.MeshToonMaterial({ color: "#ffffff" });


// Mesh.
const mesh = new THREE.Mesh(
    geo,
    material
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


////////////////////////////////////////
// 6. Add lights to our scene.
const topLight = new THREE.PointLight("#ffffff", 100, 100);
topLight.position.y = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("#0000ff", 10, 100);
frontLight.position.set(3,1,3);
scene.add(frontLight);

const backLight = new THREE.PointLight("#00ffff", 10, 100);
backLight.position.set(-3,-1,-3);
scene.add(backLight);


renderer.render(scene, camera);