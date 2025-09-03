console.log("Sesion 04. Ejercicio 01: Configuración de Escena 3D.");
console.log(THREE);

// Definir nuestro canvas.
const canvas = document.getElementById("lienzo");

// Definir variables del tamaño de ventana.
var width = window.innerWidth;
var height = window.innerHeight;

// Actualizamos la resolución de nuestro canvas.
canvas.width = width;
canvas.height = height;

// Código para configurar una escena.
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
const mesh = new THREE.Mesh(
   new THREE.SphereGeometry(),
   new THREE.MeshBasicMaterial({ color: "#ff6600", wireframe: true })
);


// Agregar nuestro objeto a la escena.
scene.add(mesh);


// Mover nuestro mesh en la escena.
mesh.position.z = -5;

// Renderizar lo que esta viendo nuestra camara.
renderer.render(scene, camera);