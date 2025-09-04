console.log("S05. Ejercicio 04: Material PBR.");

////////////////////
// Canvas setup.
const canvas = document.getElementById("lienzo");
var width = window.innerWidth;
var height = window.innerHeight;


////////////////////
// 3D Scene setup.
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
const geometry = new THREE.SphereGeometry(1, 256, 256);
geometry.setAttribute('uv2', new THREE.BufferAttribute(geometry.attributes.uv.array, 2));

////////////////////

// 0. Material y Mesh.
var material;
var mesh;

// 1. Crear LoadingManager
const manager = new THREE.LoadingManager();

manager.onStart = function (url, itemsLoaded, itemsTotal) {
    console.log(`Iniciando carga de: ${url} (${itemsLoaded + 1}/${itemsTotal})`);
};

manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    console.log(`Cargando: ${url} (${itemsLoaded}/${itemsTotal})`);
};

manager.onLoad = function () {
    console.log('✅ ¡Todas las texturas cargadas!');
    createMesh();
};

manager.onError = function (url) {
    console.error(`❌ Error al cargar: ${url}`);
};

// 2. Crear TextureLoader con el manager
const loader = new THREE.TextureLoader(manager);

// 3. Cargar todas las texturas
const tex = {
    albedo: loader.load('./texturas/bricks/albedo.png'),
    ao: loader.load('./texturas/bricks/ao.png'),
    metalness: loader.load('./texturas/bricks/metallic.png'),
    normal: loader.load('./texturas/bricks/normal.png'),
    roughness: loader.load('./texturas/bricks/roughness.png'),
    displacement: loader.load('./texturas/bricks/displacement.png'),
};

function createMesh() {
    material = new THREE.MeshStandardMaterial({
        map: tex.albedo,
        aoMap: tex.ao,
        metalnessMap: tex.metalness,
        normalMap: tex.normal,
        roughnessMap: tex.roughness,
        displacementMap: tex.displacement,
        displacementScale: 0.1,
        side: THREE.DoubleSide,
        // wireframe: true,
    });
    console.log('material.side', material.side);
    

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    animate();
}


////////////////////////////////////////
// *. Render loop to animate mesh.
// Animación
function animate() {
    requestAnimationFrame(animate);

    // mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.005;

    renderer.render(scene, camera);
}


////////////////////////////////////////
// Luces.
const topLight = new THREE.PointLight("#ffffff", 100, 100);
topLight.position.y = 5;
topLight.position.z = 5;
scene.add(topLight);

const frontLight = new THREE.PointLight("#ffffff", 10, 100);
frontLight.position.set(3,1,3);
scene.add(frontLight);
