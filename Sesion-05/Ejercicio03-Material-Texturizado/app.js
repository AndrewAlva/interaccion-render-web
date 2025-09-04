console.log("S05. Ejercicio 03: Material Texturizado.");

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
const textureLoader = new THREE.TextureLoader();
var material;
var mesh;
var matcapMap = textureLoader.load(
    // Textura URL
    './texturas/matcap2.png',

    // on Load callback
    function (texture) {
        material = new THREE.MeshMatcapMaterial( { matcap: texture } );

        // Mesh.
        mesh = new THREE.Mesh(
            geo,
            material
        );

        ////////////////////////////////////////
        // 3. Poner objeto en la escena.
        scene.add(mesh);

        ////////////////////////////////////////
        // 4. Activar animación.
        animate();
    },

    // on Progress (no funciona por ahora)
    undefined,

    // on Error callback
    function (error) {
        console.error("Algo salio mal con la textura,", error);
    }
);


////////////////////////////////////////
// *. Render loop to animate mesh.
// Animación
function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
}