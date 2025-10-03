const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(canvas.width, canvas.height);
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);


const geo = new THREE.SphereGeometry(1.5, 128, 128);

const material = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    flatShading: true,
    
});
const mesh = new THREE.Mesh(geo, material);
scene.add(mesh);
mesh.position.z = -7;


const frontLight = new THREE.PointLight("#ffffff", 500, 100);
frontLight.position.set(7, 13, 3);
scene.add(frontLight);

const rimLight = new THREE.PointLight("#ff934b", 50, 100);
rimLight.position.set(0, -5, -12);
scene.add(rimLight);



const manager = new THREE.LoadingManager();

manager.onStart = function (url, itemsLoaded, itemsTotal) {
    console.log(`Iniciando carga de: ${url} (${itemsLoaded + 1}/${itemsTotal})`);
};

manager.onProgress = function (url, itemsLoaded, itemsTotal) {
    console.log(`Cargando: ${url} (${itemsLoaded}/${itemsTotal})`);
};

manager.onLoad = function () {
    console.log('✅ ¡Todas las texturas cargadas!');
    createMaterial();
};

manager.onError = function (url) {
    console.error(`❌ Error al cargar: ${url}`);
};


const loader = new THREE.TextureLoader(manager);

// 1. 
// Necesitamos un "loader" de texturas especiales llamadas "Cube Textures",
// el loader se llama "CubeTextureLoader",
// y la vinculamos a nuestro "manager" también para que se carguen en paralelo y sepamos cuando estén listas todas las texturas.
const cubeTexLoader = new THREE.CubeTextureLoader(manager);

const rustedTextures = {
    albedo: loader.load('./assets/texturas/rusted/albedo.png'),
    metalness: loader.load('./assets/texturas/rusted/metallic.png'),
    normal: loader.load('./assets/texturas/rusted/normal.png'),
    roughness: loader.load('./assets/texturas/rusted/roughness.png'),
};

// 2. 
// Cargamos las "Cube Textures" y las guardamos en una constante creada por nosotros.
const envMap = cubeTexLoader.load([
    './assets/texturas/environment/posx.jpg', './assets/texturas/environment/negx.jpg',   // +X, -X
    './assets/texturas/environment/posy.jpg', './assets/texturas/environment/negy.jpg',   // +Y, -Y
    './assets/texturas/environment/posz.jpg', './assets/texturas/environment/negz.jpg'    // +Z, -Z
]);

// 3. 
// Asignamos este "mapa" (también conocido como "environment map") al fondo de la escena para reemplazar el color sólido.
scene.background = envMap;


var rustedMaterial;

function createMaterial() {
    rustedMaterial = new THREE.MeshStandardMaterial({
        map: rustedTextures.albedo,
        metalnessMap: rustedTextures.metalness,
        normalMap: rustedTextures.normal,
        roughnessMap: rustedTextures.roughness,
        metalness: 0.8,
        roughness: 0.4,
        envMap: envMap, // 4. Asignar nuestro "environment map" a un atributo en el material para que las partes metálicas lo reflejen.
        side: THREE.DoubleSide,
        // wireframe: true,
    });

    mesh.material = rustedMaterial;
}


var mouse = {
    x: 0,
    y: 0,
    normalOffset: {
        x: 0,
        y: 0
    },
    lerpNormalOffset: {
        x: 0,
        y: 0
    },

    cof: 0.07,
    gazeRange: {
        x: 7,
        y: 3
    }
}


function updateMouseData(eventData) {
    updateMousePosition(eventData);
    calculateNormalOffset();
}

function updateMousePosition(eventData) {
    mouse.x = eventData.clientX;
    mouse.y = eventData.clientY;
}

function calculateNormalOffset() {
    let windowCenter = {
        x: canvas.width / 2,
        y: canvas.height / 2,
    }

    mouse.normalOffset.x = ( (mouse.x - windowCenter.x) / canvas.width ) * 2;
    mouse.normalOffset.y = ( (mouse.y - windowCenter.y) / canvas.height ) * 2;
}

window.addEventListener("mousemove", updateMouseData);


function lerpDistanceToCenter() {
    mouse.lerpNormalOffset.x += (mouse.normalOffset.x - mouse.lerpNormalOffset.x) * mouse.cof;
    mouse.lerpNormalOffset.y += (mouse.normalOffset.y - mouse.lerpNormalOffset.y) * mouse.cof;
}


function updateCameraPosition() {
    camera.position.x = mouse.lerpNormalOffset.x * mouse.gazeRange.x;
    camera.position.y = -mouse.lerpNormalOffset.y * mouse.gazeRange.y;
}

camera.lookAt(mesh.position);


function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x -= 0.005;

    lerpDistanceToCenter();
    updateCameraPosition();
    camera.lookAt(mesh.position);

    renderer.render(scene, camera);
}

animate();